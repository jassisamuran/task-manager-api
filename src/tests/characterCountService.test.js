const { characterCount } = require('../services/characterCountService');

describe('characterCount', () => {
    test('counts total characters', () => {
        const result = characterCount('hello');
        expect(result.totalCharacters).toBe(5);
    });

    test('counts characters without spaces', () => {
        const result = characterCount('hello world');
        expect(result.charactersWithoutSpaces).toBe(10);
    });

    test('counts unique characters', () => {
        const result = characterCount('hello');
        expect(result.uniqueCharacters).toBe(4);
    });
});