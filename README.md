**Disclaimer**: this is an exercise, not a finished product. It has [issues](https://github.com/carawarner/agnostic-calculator-demo/issues).

# Agnostic Calculator Demo

![Travis](https://travis-ci.com/carawarner/agnostic-calculator.svg?branch=master)

This full-stack app showcases the [Agnostic Calculator](https://github.com/carawarner/pantheon), a Python3 library that parses strings representing mathematical expressions. It is number-type agnostic: a `Calculator` instance takes a `converter` which allows you to specify numerical types other than regular base 10. There is one converter available: `roman`.

## How to install

_With Docker_:
```
sudo docker pull carawarner/calculator-demo:latest
docker run -it -p 8080:80 carawarner/calculator-demo:latest
service uwsgi start # It will appear to fail
service nginx start
```
Visit localhost:8080

_Manually_:
```
git clone git@github.com:carawarner/agnostic-calculator-demo.git
cd agnostic-calculator-demo/app/server
virtualenv -p python3 venv
source venv/bin/activate
pip install -r requirements.txt
cd agnostic-calculator-demo/app/static
npm install
```

## How to run tests

This project uses Enzyme and Jest to test frontend code, and Tavern (a pytest plugin) to test the API. Frontend tests are run as part of continuous integration. **API tests are not.**

_To run frontend tests locally_:
```
cd agnostic-calculator-demo/app/static
npm test
```

_To run API tests locally_:

A running server is required. Make sure the virtualenv is active, then...
```
cd agnostic-calculator-demo/app/server
export FLASK_APP=routes.py
flask run
``` 
In another tab:
```
cd agnostic-calculator-demo/app/server
pytest test_routes.tavern.yml
```
