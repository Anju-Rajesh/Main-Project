const express = require('express');
const router = express.Router();
const { Donor } = require('../Models/donor');

// Endpoint to fetch full details of donors by blood group
router.get('/donors/:bloodGroup', async (req, res) => {
    try {
        const bloodGroup = req.params.bloodGroup.toUpperCase();
        const donors = await Donor.find({ bloodGroup }).sort('firstName');

        if (!donors || donors.length === 0) {
            return res.status(404).json({ message: 'No donors found for the specified blood group' });
        }

        res.status(200).json({ data: donors, message: 'Donors fetched successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
