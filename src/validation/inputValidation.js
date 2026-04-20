function validateInput(data) {
    if (!data || typeof data.username !== 'string' || typeof data.password !== 'string') {
        throw new Error('Invalid input: username and password fields are required and must be strings.');
    }
}

module.exports = validateInput;