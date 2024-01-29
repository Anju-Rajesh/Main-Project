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
    })


var userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    });

    return token;
};

const Admin = mongoose.model("admin", userSchema);

const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("first Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
    });
    return schema.validate(data);
};

module.exports = { Admin, validate };