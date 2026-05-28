const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const wordCountRoutes = require('../routes/wordCountRoutes');

const app = express();
app.use(bodyParser.json());
app.use(wordCountRoutes);

describe('POST /count-words', () => {
    test('responds with word count, characters, and vowels', async () => {
        const response = await request(app)
            .post('/count-words')
            .send({ inputString: 'Hello world' });
        expect(response.status).toBe(200);
        expect(response.body.numWords).toBe(2);
        expect(response.body.numCharacters).toBe(11);
        expect(response.body.numVowels).toBe(3);
    });
    test('responds with 400 for empty string', async () => {
        const response = await request(app)
            .post('/count-words')
            .send({ inputString: '' });
        expect(response.status).toBe(200);
        expect(response.body.numWords).toBe(0);
        expect(response.body.numCharacters).toBe(0);
        expect(response.body.numVowels).toBe(0);
    });
    test('responds with 400 for non-string input', async () => {
        const response = await request(app)
            .post('/count-words')
            .send({ inputString: 123 });
        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Input must be a string');
    });
});
