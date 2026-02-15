from flask import Flask, request, jsonify
from flask_cors import CORS
from model.predict import predict_handwriting

app = Flask(__name__)
CORS(app)

@app.route("/predict", methods=["POST"])
def predict():
    if "image" not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    image = request.files["image"]
    name, accuracy = predict_handwriting(image)

    return jsonify({
        "name": name,
        "accuracy": accuracy
    })

if __name__ == "__main__":
    app.run(debug=True)
