from flask import Flask, render_template, jsonify, request
from server import app
from calculator.calculator import Calculator
import  calculator.converters.roman as converter

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/evaluate', methods=['POST'])
def evaluate():
    data = request.get_json()
    expression = data['expression'];

    calculator = Calculator(converter)
    result = calculator.evaluate(expression)

    return jsonify({'result': result})
