import json
import unittest
from app import app

class CountStringTestCase(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test_count_string(self):
        response = self.app.post('/countstring', json={'input': 'Hello World 123'})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.data), {'vowels': 3, 'consonants': 7, 'digits': 3})

    def test_empty_string(self):
        response = self.app.post('/countstring', json={'input': ''})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.data), {'vowels': 0, 'consonants': 0, 'digits': 0})

if __name__ == '__main__':
    unittest.main()