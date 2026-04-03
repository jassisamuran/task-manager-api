const { countVowelsConsonantsDigits } = require('../utils/text_analysis');

function countWords(inputString) {
    if (typeof inputString !== 'string') {
        throw new Error('Input must be a string');
    }
    const { no_of_vowels, no_of_consonants, no_of_digits } = countVowelsConsonantsDigits(inputString);
    return { wordCount: inputString.trim() === '' ? 0 : inputString.trim().split(/\s+/).length, no_of_vowels, no_of_consonants, no_of_digits };
}

module.exports = { countWords };
