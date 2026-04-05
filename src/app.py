from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/word_count', methods=['POST'])
def word_count():
    data = request.get_json()
    if not data or 'text' not in data:
        return jsonify({'error': 'No text provided'}), 400
    text = data['text']
    word_count = len(text.split())
    vowel_count = sum(1 for char in text if char in 'aeiouAEIOU')
    consonant_count = sum(1 for char in text if char.isalpha() and char not in 'aeiouAEIOU')
    digit_count = sum(1 for char in text if char.isdigit())
    return jsonify({'word_count': word_count, 'vowel_count': vowel_count, 'consonant_count': consonant_count, 'digit_count': digit_count})

if __name__ == '__main__':
    app.run(debug=True)