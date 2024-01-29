const express = require('express');
const { User } = require('../Models/user');

const router = express.Router();

// View all users
router.get('/ViewUsers', async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 }); // Exclude password from the response
        res.status(200).json({ data: users, message: 'Users fetched successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error', error });
    }
});

// Delete user by email
router.delete('/DeleteUser/:email', async (req, res) => {
    try {
        const { email } = req.params;

        // Check if the user with the email exists
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Delete the user
        await User.findOneAndDelete({ email });

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error', error });
    }
});

module.exports = router;
