const request = require('supertest');
const app = require('../app');
const jwt = require('jsonwebtoken');

// Mock user data
const user = { id: 1, username: 'testuser' };

// Mock JWT secret
const JWT_SECRET = 'your_jwt_secret';

describe('JWT Authentication', () => {
  let refreshToken;

  beforeAll(() => {
    // Generate a refresh token
    refreshToken = jwt.sign(user, JWT_SECRET, { expiresIn: '7d' });
  });

  test('should authenticate user and return access token', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ username: user.username, password: 'password' });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('accessToken');
    expect(response.body).toHaveProperty('refreshToken');
  });

  test('should refresh access token using refresh token', async () => {
    const response = await request(app)
      .post('/api/auth/refresh')
      .send({ refreshToken });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('accessToken');
  });

  test('should fail to refresh access token with invalid refresh token', async () => {
    const response = await request(app)
      .post('/api/auth/refresh')
      .send({ refreshToken: 'invalid_token' });

    expect(response.status).toBe(403);
    expect(response.body).toHaveProperty('error');
  });
});
