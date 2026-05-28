const express = require('express');
const router = express.Router();
const countMetrics = require('../services/wordCountMetricsService');

// Controller function to count words and metrics
const countWords = (req, res) => {
    const text = req.body.text;
    if (typeof text !== 'string') {
        return res.status(400).json({ error: 'Invalid input, expected a string.' });
    }
    const metrics = countMetrics(text);
    res.json(metrics);
};

router.post('/count', countWords);

module.exports = router;