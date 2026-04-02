const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const CharacterCountController = require('../controllers/CharacterCountController');

const app = express();
app.use(bodyParser.json());
app.post('/character-count', CharacterCountController.countCharacters);

describe('Character Count API', () => {
    it('should return character counts', async () => {
        const response = await request(app)
            .post('/character-count')
            .send({ text: 'hello world' });

        expect(response.status).toBe(200);
        expect(response.body.totalCharacters).toBe(11);
        expect(response.body.charactersWithoutSpaces).toBe(10);
        expect(response.body.uniqueCharacters).toBe(8);
    });
});