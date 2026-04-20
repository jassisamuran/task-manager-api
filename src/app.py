from flask import Flask, request, jsonify
from middleware.authMiddleware import authMiddleware

app = Flask(__name__)

@app.route('/word_count', methods=['POST'])
@authMiddleware
def word_count():
    data = request.get_json()
    if not data or 'text' not in data:
        return jsonify({'error': 'No text provided'}), 400
    text = data['text']
    word_count = len(text.split())
    return jsonify({'word_count': word_count})

@app.route('/login', methods=['POST'])
def login():
    # Logic for login will be handled in authController
    pass

if __name__ == '__main__':
    app.run(debug=True)