const bcrypt = require('bcrypt');
const express = require('express');
const { Donor } = require('../Models/donor');

const router = express.Router();

// Register a new donor
router.post('/donorRegister', async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            bloodGroup,
            contactNumber,
            address,
        } = req.body;

        // Check if the email is already registered
        const existingDonor = await Donor.findOne({ email });
        if (existingDonor) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new donor instance
        const newDonor = new Donor({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            bloodGroup,
            contactNumber,
            address,
            isDonor: false,
            registrationRequest: 'Pending', // Add a status for the registration request
        });

        // Save the new donor to the database
        await newDonor.save();

        // Respond with a success message and donor details
        res.status(201).json({
            message: 'Donor registration request submitted successfully',
            donor: {
                id: newDonor._id,
                firstName: newDonor.firstName,
                lastName: newDonor.lastName,
                email: newDonor.email,
                bloodGroup: newDonor.bloodGroup,
                contactNumber: newDonor.contactNumber,
                address: newDonor.address,
                isDonor: newDonor.isDonor,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error', error });
    }
});

// Fetch pending donor registration requests for admin view
router.get('/admin/pendingDonors', async (req, res) => {
    try {
        const pendingDonors = await Donor.find({ registrationRequest: 'Pending' });
        res.status(200).json({ pendingDonors });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error', error });
    }
});

// Admin accepts a donor registration request
router.put('/admin/accept-registration/:id', async (req, res) => {
    try {
        const userId = req.params.id;

        // Update the registration status
        await Donor.findByIdAndUpdate(userId, { registrationRequest: 'Accepted' });

        res.json({ message: 'Donor registration request accepted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Admin rejects a donor registration request
router.put('/admin/reject-registration/:id', async (req, res) => {
    try {
        const userId = req.params.id;

        // Update the registration status
        await Donor.findByIdAndUpdate(userId, { registrationRequest: 'Rejected' });

        res.json({ message: 'Donor registration request rejected' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
