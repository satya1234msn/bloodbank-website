const express = require('express');
const router = express.Router();
const { submitHealth } = require('../controllers/healthController');

router.post('/', submitHealth);

module.exports = router;
