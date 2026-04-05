import json
import unittest
from app import app

class WordCountTestCase(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test_word_count(self):
        response = self.app.post('/word_count', json={'text': 'Hello world'})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.data), {'word_count': 2, 'vowel_count': 3, 'consonant_count': 7, 'digit_count': 0})

    def test_no_text(self):
        response = self.app.post('/word_count', json={})
        self.assertEqual(response.status_code, 400)
        self.assertEqual(json.loads(response.data), {'error': 'No text provided'})

if __name__ == '__main__':
    unittest.main()