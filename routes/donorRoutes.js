// const express = require('express');
// const router = express.Router();
// const { Donor } = require('../Models/donor');

// router.post('/donerRegister', async (req, res) => {
//     try {
//         const {
//             firstName,
//             lastName,
//             email,
//             password,
//             bloodGroup,
//             contactNumber,
//             address

//         } = req.body;

//         // Check if the email is already registered
//         const existingDonor = await Donor.findOne({ email });
//         if (existingDonor) {
//             return res.status(400).json({ message: 'Email already registered as a donor' });
//         }

//         // Create a new donor
//         const newDonor = new Donor({
//             firstName,
//             lastName,
//             email,
//             password,
//             bloodGroup,
//             contactNumber,
//             address
    
//         });

//         // Save the new donor to the database
//         await newDonor.save();

//         res.status(201).json({ message: 'Donor registered successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error', error });
//     }
// });

// module.exports = router;


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
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new donor
        const newDonor = new Donor({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            bloodGroup,
            contactNumber,
            address,
            isDonor: false,
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
