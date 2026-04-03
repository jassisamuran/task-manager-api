def count_vowels_consonants_digits(text):
    vowels = "aeiouAEIOU"
    no_of_vowels = sum(1 for char in text if char in vowels)
    no_of_consonants = sum(1 for char in text if char.isalpha() and char not in vowels)
    no_of_digits = sum(1 for char in text if char.isdigit())
    return no_of_vowels, no_of_consonants, no_of_digits
