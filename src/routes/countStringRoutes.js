const express = require('express');
const { countString } = require('../controllers/countStringController');

const router = express.Router();

router.post('/countstring', countString);

module.exports = router;