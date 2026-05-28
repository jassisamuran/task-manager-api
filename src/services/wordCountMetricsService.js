function countMetrics(text) {
    const numCharacters = text.length;
    const numWords = text.trim() ? text.trim().split(/\s+/).length : 0;
    const numVowels = (text.match(/[aeiou]/gi) || []).length;

    return {
        numCharacters,
        numWords,
        numVowels
    };
}

module.exports = countMetrics;
