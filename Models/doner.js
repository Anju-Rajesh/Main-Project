// const mongoose = require('mongoose');

// const donorSchema = new mongoose.Schema({
//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     bloodGroup: { type: String, required: true },
//     contactNumber: { type: String, required: true },
//     address: { type: String, required: true },
//     // Add other relevant fields as needed
// },
//     {
//         timestamps: true
//     });

// module.exports = mongoose.model('Donor', donorSchema);

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

mongoose.connect("mongodb+srv://anjurajesh7214:anjurajesh@cluster0.fea9s4m.mongodb.net/BLOOD_DATA?retryWrites=true&w=majority")
    .then(() => {
        console.log("db connected");
    })
    .catch((err) => {
        console.log(err);
    });

const donorSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    contactNumber: { type: String, required: true },
    address: { type: String, required: true },
});

donorSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    });

    return token;
};

const Donor = mongoose.model("Donor", donorSchema);

const validateDonor = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
        bloodGroup: Joi.string().required().label("Blood Group"),
        contactNumber: Joi.string().required().label("Contact Number"),
        address: Joi.string().required().label("Address")
    });
    return schema.validate(data);
};

module.exports = { Donor, validateDonor };
