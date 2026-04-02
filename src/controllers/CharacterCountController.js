class CharacterCountController {
    static countCharacters(req, res) {
        const text = req.body.text || '';
        const totalCharacters = text.length;
        const charactersWithoutSpaces = text.replace(/\s+/g, '').length;
        const uniqueCharacters = new Set(text).size;

        return res.json({
            totalCharacters,
            charactersWithoutSpaces,
            uniqueCharacters
        });
    }
}

module.exports = CharacterCountController;