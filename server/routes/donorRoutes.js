const express = require('express');
const router = express.Router();
const { createDonor, getDonors, searchDonors } = require('../controllers/donorController');

router.post('/', createDonor);
router.get('/', getDonors);
router.get('/search', searchDonors);

module.exports = router;
