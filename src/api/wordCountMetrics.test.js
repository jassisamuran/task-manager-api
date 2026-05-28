const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const wordCountMetrics = require('./wordCountMetrics');

const app = express();
app.use(bodyParser.json());
app.use('/api', wordCountMetrics);

describe('POST /api/count', () => {
    it('should return the number of characters, words, and vowels', async () => {
        const response = await request(app)
            .post('/api/count')
            .send({ text: 'Hello World' });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            characters: 11,
            words: 2,
            vowels: 3
        });
    });

    it('should return 0 for empty text', async () => {
        const response = await request(app)
            .post('/api/count')
            .send({ text: '' });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            characters: 0,
            words: 0,
            vowels: 0
        });
    });
});