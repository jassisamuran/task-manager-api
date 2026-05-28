const express = require('express');
const LiveUpdateController = require('../liveUpdateController');

const router = express.Router();

router.get('/subscribe', LiveUpdateController.subscribe);

module.exports = router;