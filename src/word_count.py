def count_words(input_string):
    """
    Count the number of words in a given string.
    """
    words = input_string.split()
    return len(words)

# Example usage:
if __name__ == '__main__':
    test_string = "Hello world! This is a test."
    print(f"Number of words: {count_words(test_string)}")