const request = require('supertest');
const express = require('express');
const wordCountRoute = require('../api/wordCount');

const app = express();
app.use(express.json());
app.use('/api', wordCountRoute);

describe('POST /api/word_count', () => {
    it('should count words, vowels, consonants, and digits in a string', async () => {
        const response = await request(app)
            .post('/api/word_count')
            .send({ text: 'Hello World 123!' });
        expect(response.status).toBe(200);
        expect(response.body.word_count).toBe(2);
        expect(response.body.vowel_count).toBe(3);
        expect(response.body.consonant_count).toBe(7);
        expect(response.body.digit_count).toBe(3);
    });

    it('should return 400 for empty text', async () => {
        const response = await request(app)
            .post('/api/word_count')
            .send({ text: '' });
        expect(response.status).toBe(400);
        expect(response.body.error).toBe('No text provided');
    });
});