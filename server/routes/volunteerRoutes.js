const express = require('express');
const router = express.Router();
const { createVolunteer } = require('../controllers/volunteerController');

// Volunteer registration
router.post('/', createVolunteer);

module.exports = router;
