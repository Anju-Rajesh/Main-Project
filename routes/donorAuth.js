const router = require("express").Router();
const bcrypt = require("bcrypt");
const Joi = require("joi");
const { Donor, validateDonor } = require("../Models/donor");

// Donor registration with requests
router.post("/donorRegister", async (req, res) => {
    try {
        const { error } = validateDonor(req.body);
        if (error) return res.status(400).send({ message: error.details[0].message });

        const existingDonor = await Donor.findOne({ email: req.body.email });
        if (existingDonor) return res.status(400).json({ message: 'Email already registered' });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newDonor = new Donor({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword,
            bloodGroup: req.body.bloodGroup,
            contactNumber: req.body.contactNumber,
            address: req.body.address,
            registrationRequest:req.body.registrationRequest,


        });

        await newDonor.save();

        res.status(201).json({ message: 'Donor registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error', error });
    }
});

// Donor login with requests
router.post("/donorLogin", async (req, res) => {
    try {
        console.log("Received request:", req.body);
        const { error } = validate(req.body);
        if (error) return res.status(400).send({ message: error.details[0].message });

        const donor = await Donor.findOne({ email: req.body.email });
        if (!donor) return res.status(401).send({ message: "Donor Not Found" });

        const validPassword = await bcrypt.compare(req.body.password, donor.password);
        if (!validPassword) return res.status(401).send({ message: "Invalid Email or Password" });

        res.status(200).send({ data: donor.generateAuthToken(), message: "Logged in successfully", registrationStatus: donor.registrationRequest });
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
