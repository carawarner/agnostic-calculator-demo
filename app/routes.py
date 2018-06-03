from flask import Flask, render_template, jsonify, request
from random import randint
app = Flask(__name__, static_folder='static/dist', template_folder='static')

@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/api/evaluate', methods=['POST'])
def evaluate():
    data = request.get_json()
    expression = data['expression'];
    result = str(randint(0, 100)) # TODO: import calculator lib and perform real evaluation
    return jsonify({'result': result})
