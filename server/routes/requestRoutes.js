const express = require('express');
const router = express.Router();
const { createRequest, getAllRequests, getUserRequests, deleteRequest, } = require('../controllers/requestController');

// Define routes
router.post('/', createRequest);      // POST /api/requests
router.get('/', getAllRequests);  
router.get('/user/:email', getUserRequests);
router.delete('/:id', deleteRequest);


    // GET /api/requests

module.exports = router;
