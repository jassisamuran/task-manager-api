const express = require('express');
const router = express.Router();

// Endpoint to count characters, words, and vowels
router.post('/count', (req, res) => {
    const text = req.body.text || '';
    const numCharacters = text.length;
    const numWords = text.trim() ? text.trim().split(/\s+/).length : 0;
    const numVowels = (text.match(/[aeiou]/gi) || []).length;

    res.json({
        characters: numCharacters,
        words: numWords,
        vowels: numVowels
    });
});

module.exports = router;