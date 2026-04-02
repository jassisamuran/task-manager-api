class CharacterCountService {
    static countCharacters(text) {
        const totalCharacters = text.length;
        const charactersWithoutSpaces = text.replace(/\s+/g, '').length;
        const uniqueCharacters = new Set(text).size;

        return {
            totalCharacters,
            charactersWithoutSpaces,
            uniqueCharacters
        };
    }
}

module.exports = CharacterCountService;