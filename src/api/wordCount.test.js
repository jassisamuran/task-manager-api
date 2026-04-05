const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const wordCountRoute = require('./wordCount');

const app = express();
app.use(bodyParser.json());
app.use('/api', wordCountRoute);

describe('POST /api/wordcount', () => {
    it('should return the word count for valid text', async () => {
        const response = await request(app)
            .post('/api/wordcount')
            .send({ text: 'Hello world' });
        expect(response.status).toBe(200);
        expect(response.body.wordCount).toBe(2);
    });

    it('should return 400 for empty text', async () => {
        const response = await request(app)
            .post('/api/wordcount')
            .send({ text: '' });
        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Text is required.');
    });

    it('should return 400 for invalid input', async () => {
        const response = await request(app)
            .post('/api/wordcount')
            .send({ text: null });
        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Text is required.');
    });

    it('should return the count of vowels, digits, and consonants', async () => {
        const response = await request(app)
            .post('/api/wordcount')
            .send({ text: 'Hello World 123' });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            wordCount: 3,
            vowelCount: 5,
            consonantCount: 7,
            digitCount: 3
        });
    });
});
