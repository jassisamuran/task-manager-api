function countString(input) {
    const vowels = input.match(/[aeiou]/gi) || [];
    const consonants = input.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];
    const digits = input.match(/[0-9]/g) || [];

    return {
        vowels: vowels.length,
        consonants: consonants.length,
        digits: digits.length
    };
}

module.exports = countString;