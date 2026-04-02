const express = require('express');
const wordCount = require('../api/wordCount');

const router = express.Router();

router.post('/wordcount', (req, res) => {
    try {
        const count = wordCount(req.body);
        res.json({ wordCount: count });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;