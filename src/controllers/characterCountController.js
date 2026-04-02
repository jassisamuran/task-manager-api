const { characterCount } = require('../services/characterCountService');

const countCharacters = (req, res) => {
    const { text } = req.body;
    if (typeof text !== 'string') {
        return res.status(400).json({ error: 'Text must be a string.' });
    }
    const result = characterCount(text);
    return res.json(result);
};

module.exports = { countCharacters };