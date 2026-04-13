function countVowels(inputString) {
    if (typeof inputString !== 'string') {
        throw new Error('Input must be a string');
    }
    const vowels = 'aeiouAEIOU';
    return Array.from(inputString).filter(char => vowels.includes(char)).length;
}

module.exports = { countVowels };