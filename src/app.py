from flask import Flask, request, jsonify
from utils.text_analysis import count_vowels_consonants_digits

app = Flask(__name__)

@app.route('/word_count', methods=['POST'])
def word_count():
    data = request.get_json()
    if not data or 'text' not in data:
        return jsonify({'error': 'No text provided'}), 400
    text = data['text']
    word_count = len(text.split())
    no_of_vowels, no_of_consonants, no_of_digits = count_vowels_consonants_digits(text)
    return jsonify({'word_count': word_count, 'no_of_vowels': no_of_vowels, 'no_of_consonants': no_of_consonants, 'no_of_digits': no_of_digits})

if __name__ == '__main__':
    app.run(debug=True)
