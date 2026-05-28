import unittest
from validation.inputValidation import validate_input

class TestInputValidation(unittest.TestCase):
    def test_valid_input(self):
        self.assertTrue(validate_input('valid input'))

    def test_empty_input(self):
        self.assertFalse(validate_input(''))

    def test_special_characters(self):
        self.assertFalse(validate_input('invalid@input'))

    def test_exceeding_max_length(self):
        long_input = 'a' * 256
        self.assertFalse(validate_input(long_input))

if __name__ == '__main__':
    unittest.main()