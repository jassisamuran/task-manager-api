const express = require('express');
const router = express.Router();

router.post('/character-count', (req, res) => {
    const text = req.body.text;
    if (!text) {
        return res.status(400).json({ error: 'Text field is required' });
    }

    const totalCharacters = text.length;
    const charactersWithoutSpaces = text.replace(/\s+/g, '').length;
    const uniqueCharacters = [...new Set(text)].length;

    res.json({
        totalCharacters,
        charactersWithoutSpaces,
        uniqueCharacters
    });
});

module.exports = router;