const CharacterCountService = require('../services/CharacterCountService');

describe('CharacterCountService', () => {
    test('counts characters correctly', () => {
        const result = CharacterCountService.countCharacters('hello world');
        expect(result.totalCharacters).toBe(11);
        expect(result.charactersWithoutSpaces).toBe(10);
        expect(result.uniqueCharacters).toBe(8);
    });
});