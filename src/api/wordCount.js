const express = require('express');
const router = express.Router();

// Controller function to count words
const countWords = (req, res) => {
    const text = req.body.text;
    if (typeof text !== 'string') {
        return res.status(400).json({ error: 'Invalid input, expected a string.' });
    }
    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
    res.json({ wordCount });
};

router.post('/count', countWords);

module.exports = router;