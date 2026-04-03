const request = require('supertest');
const express = require('express');
const countStringRoutes = require('../routes/countStringRoutes');

const app = express();
app.use(express.json());
app.use(countStringRoutes);

describe('POST /countstring', () => {
    test('responds with json containing counts', async () => {
        const response = await request(app)
            .post('/countstring')
            .send({ input: 'Hello World 123' });
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ vowels: 3, consonants: 7, digits: 3 });
    });
});