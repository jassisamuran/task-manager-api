const request = require('supertest');
const express = require('express');
const wordCountRoute = require('../api/wordCount');

const app = express();
app.use(express.json());
app.use('/api', wordCountRoute);

describe('POST /api/count', () => {
    it('should count words in a string', async () => {
        const response = await request(app)
            .post('/api/count')
            .send({ text: 'Hello world' });
        expect(response.status).toBe(200);
        expect(response.body.wordCount).toBe(2);
    });

    it('should return 400 for invalid input', async () => {
        const response = await request(app)
            .post('/api/count')
            .send({ text: 123 });
        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Invalid input, expected a string.');
    });
});