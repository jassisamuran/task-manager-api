const wordCountService = require('../services/wordCountService');
const validateInput = require('../validation/inputValidation');

const countWords = (req, res) => {
    try {
        validateInput(req.body);
        const { inputString } = req.body;
        const wordCount = wordCountService.countWords(inputString);
        res.status(200).json({ wordCount });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { countWords };