const express = require('express');
const router = express.Router();
const { countWords } = require('../services/wordCountService');

router.post('/count', (req, res) => {
    const result = countWords(req.body.text);
    res.json(result);
});

module.exports = router;
