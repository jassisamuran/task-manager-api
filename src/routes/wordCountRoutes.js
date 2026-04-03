const express = require('express');
const { countWords } = require('../services/wordCountService');

const router = express.Router();

router.post('/count-words', (req, res) => {
    const result = countWords(req.body.text);
    res.json(result);
});

module.exports = router;
