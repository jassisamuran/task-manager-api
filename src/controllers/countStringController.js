const countStringService = require('../services/countStringService');

const countString = (req, res) => {
    const input = req.body.input;
    const result = countStringService(input);
    return res.json(result);
};

module.exports = { countString };