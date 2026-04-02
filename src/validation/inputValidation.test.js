const validateInput = require('./inputValidation');

describe('Input Validation', () => {
    test('valid input', () => {
        expect(() => validateInput({ text: 'Hello World' })).not.toThrow();
    });

    test('missing text field', () => {
        expect(() => validateInput({})).toThrow('Invalid input: text field is required and must be a string.');
    });

    test('text field is not a string', () => {
        expect(() => validateInput({ text: 123 })).toThrow('Invalid input: text field is required and must be a string.');
    });
});