const express = require('express');
const router = express.Router();
const { validateText } = require('../validation/inputValidation');

// Word count endpoint
router.post('/wordcount', (req, res) => {
    const { text } = req.body;
    const { error } = validateText(text);
    if (error) {
        return res.status(400).send({ message: error.details[0].message });
    }
    const wordCount = text.trim().split(/\s+/).length;
    res.send({ wordCount });
});

module.exports = router;