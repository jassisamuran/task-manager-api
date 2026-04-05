const express = require('express');
const router = express.Router();

// Controller function to count words
const countWords = (req, res) => {
    const text = req.body.text;
    if (typeof text !== 'string') {
        return res.status(400).json({ error: 'Invalid input, expected a string.' });
    }
    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
    const vowelCount = (text.match(/[aeiouAEIOU]/g) || []).length;
    const digitCount = (text.match(/[0-9]/g) || []).length;
    const consonantCount = (text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || []).length;
    res.json({ wordCount, vowelCount, digitCount, consonantCount });
};

router.post('/count', countWords);

module.exports = router;