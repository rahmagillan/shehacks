from sys import argv
from flask import Flask, request
from firestore import get_data, add_note
from flask_cors import CORS, cross_origin
from cloudstorage import get_audio

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

@app.route("/get-audio-file")
@cross_origin()
def getAudio():
    args = request.args
    blob = get_audio(args['filename'])
    return blob.download_as_bytes()

@app.route("/add-note")
@cross_origin()
def newNote():
    args = request.args
    add_note(args['filename'], args['newnote'])
    return "200"
