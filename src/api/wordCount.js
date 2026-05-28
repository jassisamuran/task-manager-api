const express = require('express');
const router = express.Router();
const validateInput = require('../validation/inputValidation');
const wordCountService = require('../services/wordCountService');

// Controller function to count words
const countWords = (req, res) => {
    try {
        validateInput(req.body);
        const text = req.body.text;
        const wordCount = wordCountService.countWords(text);
        res.json({ wordCount });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

router.post('/count', countWords);

module.exports = router;