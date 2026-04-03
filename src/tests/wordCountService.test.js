const { countWords } = require('../services/wordCountService');

describe('countWords', () => {
    test('counts words, vowels, consonants, and digits correctly', () => {
        const input = 'Hello world! 123';
        const result = countWords(input);
        expect(result.wordCount).toBe(3);
        expect(result.no_of_vowels).toBe(3);
        expect(result.no_of_consonants).toBe(7);
        expect(result.no_of_digits).toBe(3);
    });

    test('returns 0 for empty string', () => {
        const input = '';
        const result = countWords(input);
        expect(result.wordCount).toBe(0);
        expect(result.no_of_vowels).toBe(0);
        expect(result.no_of_consonants).toBe(0);
        expect(result.no_of_digits).toBe(0);
    });

    test('counts correctly with no digits', () => {
        const input = 'This is a test';
        const result = countWords(input);
        expect(result.wordCount).toBe(4);
        expect(result.no_of_vowels).toBe(5);
        expect(result.no_of_consonants).toBe(7);
        expect(result.no_of_digits).toBe(0);
    });
});
