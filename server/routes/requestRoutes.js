const express = require('express');
const router = express.Router();
const { createRequest, getAllRequests, getUserRequests, deleteRequest } = require('../controllers/requestController');

// Blood request routes
router.post('/', createRequest);              // Submit a new blood request
router.get('/', getAllRequests);               // Get all blood requests
router.get('/user/:email', getUserRequests);   // Get user's own requests
router.delete('/:id', deleteRequest);          // Delete a specific request

module.exports = router;
