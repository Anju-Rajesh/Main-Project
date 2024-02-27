const router = require("express").Router();
const bcrypt = require("bcrypt");
const Joi = require("joi");
const { Admin } = require("../Models/admin");

router.post("/adminLogin", async (req, res) => {
    try {
        console.log("Recieved request:", req.body);
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        const admin = await Admin.findOne({ email: req.body.email });
        if (!admin)
            return res.status(401).send({ message: "Admin Not Found" });

        const validPassword = await bcrypt.compare(
            req.body.password,
            admin.password
        );
        if (!validPassword)
            return res.status(401).send({ message: "Invalid Email or Password" });

        const token = admin.generateAuthToken();
        res.status(200).send({ data: token, message: "logged in successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error." });
    }
});

const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password"),
    });
    return schema.validate(data);
};

module.exports = router;