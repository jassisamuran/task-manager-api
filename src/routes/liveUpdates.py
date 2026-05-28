import requests
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/live-updates', methods=['GET'])
def get_live_updates():
    # Simulate live updates
    updates = {'updates': ['Update 1', 'Update 2', 'Update 3']}
    return jsonify(updates), 200

if __name__ == '__main__':
    app.run(debug=True)
