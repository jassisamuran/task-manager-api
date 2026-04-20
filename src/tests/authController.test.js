const request = require('supertest');
const app = require('../app');

describe('Auth Controller', () => {
    it('should login and return a token', async () => {
        const response = await request(app)
            .post('/login')
            .send({ username: 'user1', password: 'password1' });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
    });

    it('should return 401 for invalid credentials', async () => {
        const response = await request(app)
            .post('/login')
            .send({ username: 'user1', password: 'wrongpassword' });
        expect(response.status).toBe(401);
    });
});