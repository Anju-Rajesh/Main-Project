// const express = require('express');
// const { Donor } = require('../Models/donor');

// const router = express.Router();

// // Delete donor by email
// router.delete('/donorDelete/:email', async (req, res) => {
//     try {
//         const { email } = req.params;

//         // Check if the donor with the email exists
//         const existingDonor = await Donor.findOne({ email });
//         if (!existingDonor) {
//             return res.status(404).json({ message: 'Donor not found' });
//         }

//         // Delete the donor
//         await Donor.findOneAndDelete({ email });

//         res.status(200).json({ message: 'Donor deleted successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error', error });
//     }
// });

// module.exports = router;
