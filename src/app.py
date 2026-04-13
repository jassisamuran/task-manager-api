from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/word_count', methods=['POST'])
def word_count():
    data = request.get_json()
    if not data or 'text' not in data:
        return jsonify({'error': 'No text provided'}), 400
    text = data['text']
    word_count = len(text.split())
    return jsonify({'word_count': word_count})

@app.route('/count-vowels', methods=['POST'])
def count_vowels():
    data = request.get_json()
    if not data or 'text' not in data:
        return jsonify({'error': 'No text provided'}), 400
    text = data['text']
    vowels = 'aeiouAEIOU'
    vowel_count = sum(1 for char in text if char in vowels)
    return jsonify({'vowel_count': vowel_count})

if __name__ == '__main__':
    app.run(debug=True)