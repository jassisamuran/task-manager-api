const countString = require('../services/countStringService');

describe('countString', () => {
    test('counts vowels, consonants, and digits', () => {
        const result = countString('Hello World 123');
        expect(result.vowels).toBe(3);
        expect(result.consonants).toBe(7);
        expect(result.digits).toBe(3);
    });
});