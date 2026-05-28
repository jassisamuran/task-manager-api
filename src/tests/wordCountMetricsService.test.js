const countMetrics = require('../services/wordCountMetricsService');

describe('countMetrics', () => {
    test('counts characters, words, and vowels correctly', () => {
        const result = countMetrics('Hello World');
        expect(result.numCharacters).toBe(11);
        expect(result.numWords).toBe(2);
        expect(result.numVowels).toBe(3);
    });

    test('handles empty string', () => {
        const result = countMetrics('');
        expect(result.numCharacters).toBe(0);
        expect(result.numWords).toBe(0);
        expect(result.numVowels).toBe(0);
    });

    test('handles string with only spaces', () => {
        const result = countMetrics('   ');
        expect(result.numCharacters).toBe(3);
        expect(result.numWords).toBe(0);
        expect(result.numVowels).toBe(0);
    });

    test('counts vowels correctly', () => {
        const result = countMetrics('This is a test');
        expect(result.numVowels).toBe(4);
    });
});
