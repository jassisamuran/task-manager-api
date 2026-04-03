const express = require('express');
const { countWords } = require('../controllers/wordCountController');

const router = express.Router();

router.post('/count-words', countWords);

module.exports = router;