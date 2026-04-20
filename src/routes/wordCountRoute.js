const express = require('express');
const wordCount = require('../api/wordCount');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/wordcount', authMiddleware, (req, res) => {
    try {
        const count = wordCount(req.body);
        res.json({ wordCount: count });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;