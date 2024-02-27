const express = require('express');
const router = express.Router();
const { BloodRequest, validateBloodRequest } = require('../Models/bloodrequest');

router.post('/request', async (req, res) => {
    try {
        const { error } = validateBloodRequest(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const { name, /* email, */ bloodGroup, reason, place, contact, status } = req.body;

        // Check if the email is already in use
        // const existingRequest = await BloodRequest.findOne({ email });
        // if (existingRequest) {
        //     return res.status(400).json({ message: 'Email is already in use' });
        // }

        const newBloodRequest = new BloodRequest({
            name,
            // email,
            bloodGroup,
            reason,
            place,
            contact,
            status
        });

        await newBloodRequest.save();

        res.status(201).json({ message: 'Blood request saved successfully' });
    } catch (error) {
        console.error('Error saving blood request:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/requests', async (req, res) => {
    try {
        const requests = await BloodRequest.find();
        res.status(200).json(requests);
    } catch (error) {
        console.error('Error fetching blood requests:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.put('/requests/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { action } = req.body;

        if (!id || !action) {
            return res.status(400).json({ message: 'Invalid request' });
        }

        const bloodRequest = await BloodRequest.findByIdAndUpdate(
            id,
            { status: action },
            { new: true }
        );

        if (!bloodRequest) {
            return res.status(404).json({ message: 'Blood request not found' });
        }

        res.status(200).json(bloodRequest);
    } catch (error) {
        console.error('Error updating blood request:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
