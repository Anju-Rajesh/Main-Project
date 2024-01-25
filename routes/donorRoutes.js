const express = require('express');
const router = express.Router();
const { Donor } = require('../Models/doner');

router.post('/donerRegister', async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            bloodGroup,
            contactNumber,
            address

        } = req.body;

        // Check if the email is already registered
        const existingDonor = await Donor.findOne({ email });
        if (existingDonor) {
            return res.status(400).json({ message: 'Email already registered as a donor' });
        }

        // Create a new donor
        const newDonor = new Donor({
            firstName,
            lastName,
            email,
            password,
            bloodGroup,
            contactNumber,
            address
    
        });

        // Save the new donor to the database
        await newDonor.save();

        res.status(201).json({ message: 'Donor registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error', error });
    }
});

module.exports = router;
