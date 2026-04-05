def count_vowels(input_string):
    vowels = 'aeiouAEIOU'
    return sum(1 for char in input_string if char in vowels)


def count_consonants(input_string):
    consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'
    return sum(1 for char in input_string if char in consonants)


def count_digits(input_string):
    return sum(1 for char in input_string if char.isdigit())


def count_details(input_string):
    return {
        'vowel_count': count_vowels(input_string),
        'consonant_count': count_consonants(input_string),
        'digit_count': count_digits(input_string)
    }