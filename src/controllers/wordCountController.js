const wordCountService = require('../services/wordCountService');

const countWords = (req, res) => {
    const { inputString } = req.body;
    try {
        const wordCount = wordCountService.countWords(inputString);
        res.status(200).json({ wordCount });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { countWords };