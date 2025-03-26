from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')

    # Simple echo AI for demonstration purposes
    # You can integrate with an actual AI model (e.g., GPT-3, GPT-4, etc.)
    ai_reply = f"Hello! You said: {user_message}"

    return jsonify({"reply": ai_reply})

if __name__ == '__main__':
    app.run(debug=True)
