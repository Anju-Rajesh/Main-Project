const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const bcrypt = require("bcrypt");
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
    registrationRequest: { type: String, enum: ['Pending', 'Accepted', 'Rejected'], default: 'Pending' },
});

donorSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    });

    return token;
};

donorSchema.methods.sendRegistrationRequest = async function () {
    // Logic to send registration request, if needed
    // For example, updating the registrationRequest field to 'Pending'
    this.registrationRequest = 'Pending';
    await this.save();
};

donorSchema.methods.acceptRequest = async function () {
    // Logic to accept registration request
    this.registrationRequest = 'Accepted';
    this.isDonor = true; // Set as a donor
    await this.save();
};

donorSchema.methods.rejectRequest = async function () {
    // Logic to reject registration request
    this.registrationRequest = 'Rejected';
    await this.save();
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
        address: Joi.string().required().label("Address"),
        registrationRequest:Joi.string().required().label("Request")
        
    });
    return schema.validate(data);
};

module.exports = { Donor, validateDonor };
