from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

alunos = [
    {"id": 1, "nome": "ana", "media": 5.0},
    {"id": 1, "nome": "bruno", "media": 7.5},
    {"id": 1, "nome": "carla", "media": 6.5}
]

@app.route('/alunos', methods=(['GET']))
def listar_alunos():
    return jsonify(alunos)

app.run(port=3000, debug=True)