const express = require('express');
const { countCharacters } = require('../controllers/characterCountController');

const router = express.Router();

router.post('/character-count', countCharacters);

module.exports = router;