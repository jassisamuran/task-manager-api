function validateInput(data) {
    if (!data || typeof data.text !== 'string') {
        throw new Error('Invalid input: text field is required and must be a string.');
    }
}

module.exports = validateInput;