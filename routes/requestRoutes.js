// routes/request.js
const express = require('express');
const router = express.Router();
const Request = require('../Models/donor');

// Get all pending requests
router.get('/pendingRequests', async (req, res) => {
    try {
        const pendingRequests = await Request.find({ status: 'Pending'});
        res.status(200).json(pendingRequests);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error', error});
    }
});

// Update the status of a request (Accept or Reject)
router.put('/updateRequestStatus/:requestId', async (req, res) => {
    try {
        const { status } = req.body;
        const requestId = req.params.requestId;

        // Validate the status (Accept or Reject)
        const validStatuses = ['Accepted', 'Rejected'];
        if (status !== validStatuses[0] && status !== validStatuses[1]) {
            return res.status(400).json({ message: 'Invalid status'});
        }

        // Update the status of the request
        const updatedRequest = await Request.findByIdAndUpdate(requestId, { status }, { new: true});
        res.status(200).json({ message: 'Request status updated successfully', request: updatedRequest});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error', error});
    }
});

module.exports = router;