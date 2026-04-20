import unittest
from app import app
import jwt

class JWTAuthTestCase(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True
        self.jwt_secret = 'your_jwt_secret'
        self.user = {'id': 1, 'username': 'testuser'}

    def test_login(self):
        response = self.app.post('/api/auth/login', json={'username': self.user['username'], 'password': 'password'})
        self.assertEqual(response.status_code, 200)
        self.assertIn('accessToken', response.json)
        self.assertIn('refreshToken', response.json)

    def test_refresh_token(self):
        refresh_token = jwt.encode(self.user, self.jwt_secret, algorithm='HS256')
        response = self.app.post('/api/auth/refresh', json={'refreshToken': refresh_token})
        self.assertEqual(response.status_code, 200)
        self.assertIn('accessToken', response.json)

    def test_refresh_token_invalid(self):
        response = self.app.post('/api/auth/refresh', json={'refreshToken': 'invalid_token'})
        self.assertEqual(response.status_code, 403)
        self.assertIn('error', response.json)

if __name__ == '__main__':
    unittest.main()