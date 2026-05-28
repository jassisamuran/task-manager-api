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
        expect(response.body.numWords).toBe(2);
        expect(response.body.numCharacters).toBe(11);
        expect(response.body.numVowels).toBe(3);
    });

    it('should return 400 for invalid input', async () => {
        const response = await request(app)
            .post('/api/count')
            .send({ text: 123 });
        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Invalid input, expected a string.');
    });

    it('should handle empty string', async () => {
        const response = await request(app)
            .post('/api/count')
            .send({ text: '' });
        expect(response.status).toBe(200);
        expect(response.body.numWords).toBe(0);
        expect(response.body.numCharacters).toBe(0);
        expect(response.body.numVowels).toBe(0);
    });
});
