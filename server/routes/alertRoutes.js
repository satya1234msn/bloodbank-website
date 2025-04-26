const express = require('express');
const router = express.Router();
const { subscribeAlert } = require('../controllers/alertController');

router.post('/', subscribeAlert);

module.exports = router;
