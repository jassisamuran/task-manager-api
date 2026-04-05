def count_words(input_string):
    """
    Count the number of words in a given string.
    """
    words = input_string.split()
    return len(words)


def count_vowels(input_string):
    vowels = 'aeiouAEIOU'
    return sum(1 for char in input_string if char in vowels)


def count_consonants(input_string):
    consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'
    return sum(1 for char in input_string if char in consonants)


def count_digits(input_string):
    return sum(1 for char in input_string if char.isdigit())


# Example usage:
if __name__ == '__main__':
    test_string = "Hello world! This is a test."
    print(f"Number of words: {count_words(test_string)}")
    print(f"Number of vowels: {count_vowels(test_string)}")
    print(f"Number of consonants: {count_consonants(test_string)}")
    print(f"Number of digits: {count_digits(test_string)}")