const express = require('express');
const { Donor, validateDonor } = require('../Models/donor');
const bcrypt = require('bcrypt');

const router = express.Router();

// Get donor details by email
router.get('/donorProfile/:email', async (req, res) => {
    try {
        const { email } = req.params;

        // Check if the donor with the email exists
        const existingDonor = await Donor.findOne({ email });
        if (!existingDonor) {
            return res.status(404).json({ message: 'Donor not found' });
        }

        res.status(200).json({ data: existingDonor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error', error });
    }
});

// Update donor details by email
router.put('/donorUpdate/:email', async (req, res) => {
    try {
        const { error } = validateDonor(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const { email } = req.params;

        // Check if the donor with the email exists
        const existingDonor = await Donor.findOne({ email });
        if (!existingDonor) {
            return res.status(404).json({ message: 'Donor not found' });
        }

        // Hash the password before updating (if provided)
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }

        // Update donor details
        const updatedDonor = await Donor.findOneAndUpdate({ email }, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({ message: 'Donor updated successfully', data: updatedDonor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error', error });
    }
});

// Delete donor by email
router.delete('/donorDelete/:email', async (req, res) => {
    try {
        const { email } = req.params;

        // Check if the donor with the email exists
        const existingDonor = await Donor.findOne({ email });
        if (!existingDonor) {
            return res.status(404).json({ message: 'Donor not found' });
        }

        // Delete the donor
        await Donor.findOneAndDelete({ email });

        res.status(200).json({ message: 'Donor deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error', error });
    }
});

module.exports = router;
