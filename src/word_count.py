from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/word_count', methods=['POST'])
def word_count():
    data = request.json
    text = data.get('text', '')
    
    num_characters = len(text)
    num_words = len(text.split())
    num_vowels = sum(1 for char in text.lower() if char in 'aeiou')
    
    return jsonify({
        'num_characters': num_characters,
        'num_words': num_words,
        'num_vowels': num_vowels
    })

if __name__ == '__main__':
    app.run(debug=True)