const { countWords } = require('../services/wordCountService');

describe('countWords', () => {
    test('counts words in a string', () => {
        expect(countWords('Hello world')).toBe(2);
    });
    test('returns 0 for an empty string', () => {
        expect(countWords('')).toBe(0);
    });
    test('returns 0 for a string with only whitespace', () => {
        expect(countWords('   ')).toBe(0);
    });
    test('throws error for non-string input', () => {
        expect(() => countWords(123)).toThrow('Input must be a string');
    });
});