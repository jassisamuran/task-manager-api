function countWords(inputString) {
    if (typeof inputString !== 'string') {
        throw new Error('Input must be a string');
    }
    return inputString.trim() === '' ? 0 : inputString.trim().split(/\s+/).length;
}

function countVowels(inputString) {
    const vowels = 'aeiouAEIOU';
    return Array.from(inputString).filter(char => vowels.includes(char)).length;
}

function countConsonants(inputString) {
    const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    return Array.from(inputString).filter(char => consonants.includes(char)).length;
}

function countDigits(inputString) {
    return Array.from(inputString).filter(char => /\\d/.test(char)).length;
}

module.exports = { countWords, countVowels, countConsonants, countDigits };