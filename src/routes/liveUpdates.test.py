import pytest
from src.routes.liveUpdates import app

@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

def test_get_live_updates(client):
    response = client.get('/api/live-updates')
    assert response.status_code == 200
    assert 'updates' in response.get_json()

def test_invalid_route(client):
    response = client.get('/api/non-existing-route')
    assert response.status_code == 404
