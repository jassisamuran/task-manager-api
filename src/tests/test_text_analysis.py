import unittest
from utils.text_analysis import count_vowels_consonants_digits

class TestTextAnalysis(unittest.TestCase):
    def test_count_vowels_consonants_digits(self):
        text = "Hello World 123"
        vowels, consonants, digits = count_vowels_consonants_digits(text)
        self.assertEqual(vowels, 3)
        self.assertEqual(consonants, 7)
        self.assertEqual(digits, 3)

if __name__ == '__main__':
    unittest.main()
