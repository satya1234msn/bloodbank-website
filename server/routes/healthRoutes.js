const express = require('express');
const router = express.Router();
const { submitHealth } = require('../controllers/healthController');

// Health form submission
router.post('/', submitHealth);

module.exports = router;
