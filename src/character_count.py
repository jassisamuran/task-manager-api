from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/character_count', methods=['POST'])
def character_count():
    data = request.get_json()
    text = data.get('text', '')
    total_characters = len(text)
    characters_without_spaces = len(text.replace(' ', ''))
    unique_characters = len(set(text))

    return jsonify({
        'total_characters': total_characters,
        'characters_without_spaces': characters_without_spaces,
        'unique_characters': unique_characters
    })

if __name__ == '__main__':
    app.run(debug=True)