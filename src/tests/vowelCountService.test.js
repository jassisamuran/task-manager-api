const { countVowels } = require('../services/wordCountService');

describe('countVowels', () => {
    test('counts vowels in a given string', () => {
        expect(countVowels("hello world")).toBe(3);
        expect(countVowels("aeiou")).toBe(5);
        expect(countVowels("xyz")).toBe(0);
        expect(countVowels("")).toBe(0);
        expect(countVowels("HELLO")).toBe(2);
    });

    test('throws error when input is not a string', () => {
        expect(() => countVowels(123)).toThrow('Input must be a string');
        expect(() => countVowels(null)).toThrow('Input must be a string');
        expect(() => countVowels([])).toThrow('Input must be a string');
    });
});
