from flask import Flask, render_template, jsonify, request
from random import randint
app = Flask(__name__, static_folder='static/dist', template_folder='static')

from calculator.calculator import Calculator
import  calculator.converters.roman as converter

@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/api/evaluate', methods=['POST'])
def evaluate():
    data = request.get_json()
    expression = data['expression'];

    calculator = Calculator(converter)
    result = calculator.evaluate(expression)

    return jsonify({'result': result})
