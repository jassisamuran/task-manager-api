import unittest
from services.countDetailsService import count_details

class TestCountDetailsService(unittest.TestCase):
    def test_count_details(self):
        result = count_details("Hello World 123!")
        self.assertEqual(result['vowel_count'], 3)
        self.assertEqual(result['consonant_count'], 7)
        self.assertEqual(result['digit_count'], 3)

    def test_empty_string(self):
        result = count_details("")
        self.assertEqual(result['vowel_count'], 0)
        self.assertEqual(result['consonant_count'], 0)
        self.assertEqual(result['digit_count'], 0)

if __name__ == '__main__':
    unittest.main()