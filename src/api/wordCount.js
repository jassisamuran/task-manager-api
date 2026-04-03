const express = require('express');
const router = express.Router();
const { countWords, countVowels } = require('../services/wordCountService');

// Controller function to count words
const countWordsHandler = (req, res) => {
    const text = req.body.text;
    if (typeof text !== 'string') {
        return res.status(400).json({ error: 'Invalid input, expected a string.' });
    }
    const wordCount = countWords(text);
    res.json({ wordCount });
};

// Controller function to count vowels
const countVowelsHandler = (req, res) => {
    const text = req.body.text;
    if (typeof text !== 'string') {
        return res.status(400).json({ error: 'Invalid input, expected a string.' });
    }
    const vowelCount = countVowels(text);
    res.json({ vowelCount });
};

router.post('/count', countWordsHandler);
router.post('/count-vowels', countVowelsHandler);

module.exports = router;