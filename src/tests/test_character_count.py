import json
import pytest
from app import app

@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

def test_character_count(client):
    response = client.post('/api/character-count', json={'text': 'Hello World'})
    data = json.loads(response.data)
    assert response.status_code == 200
    assert data['totalCharacters'] == 11
    assert data['charactersWithoutSpaces'] == 10
    assert data['uniqueCharacters'] == 8


def test_character_count_missing_text(client):
    response = client.post('/api/character-count', json={})
    data = json.loads(response.data)
    assert response.status_code == 400
    assert data['error'] == 'Text field is required'