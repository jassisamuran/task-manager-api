const express = require('express');
const { countWords, countVowels } = require('../services/wordCountService');

const router = express.Router();

router.post('/count-words', (req, res) => {
    const { text } = req.body;
    const wordCount = countWords(text);
    res.json({ wordCount });
});

router.post('/count-vowels', (req, res) => {
    const { text } = req.body;
    const vowelCount = countVowels(text);
    res.json({ vowelCount });
});

module.exports = router;