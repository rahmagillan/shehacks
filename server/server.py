from flask import Flask
from firestore import get_data
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
def hello():
    return "Hello, world"

@app.route("/get-data")
@cross_origin()
def getData():
    return get_data()
