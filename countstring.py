def count_string(s):
    vowels = 'aeiouAEIOU'
    num_vowels = sum(1 for char in s if char in vowels)
    num_consonants = sum(1 for char in s if char.isalpha() and char not in vowels)
    num_digits = sum(1 for char in s if char.isdigit())
    return num_vowels, num_consonants, num_digits

# Example usage:
if __name__ == '__main__':
    input_string = 'Hello World 123!'
    vowels, consonants, digits = count_string(input_string)
    print(f'Vowels: {vowels}, Consonants: {consonants}, Digits: {digits}')