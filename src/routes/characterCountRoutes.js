const express = require('express');
const router = express.Router();
const CharacterCountController = require('../controllers/CharacterCountController');

// POST endpoint for character count
router.post('/character-count', CharacterCountController.countCharacters);

module.exports = router;