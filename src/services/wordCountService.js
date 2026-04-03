function countWords(inputString) {
    if (typeof inputString !== 'string') {
        throw new Error('Input must be a string');
    }
    return inputString.trim() === '' ? 0 : inputString.trim().split(/\\s+/).length;
}

module.exports = { countWords };