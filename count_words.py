def count_vowels(text):
    vowels = 'aeiouAEIOU'
    return sum(1 for char in text if char in vowels)

# Example usage
if __name__ == '__main__':
    sample_text = 'Hello World'
    print(f'Number of vowels: {count_vowels(sample_text)}')