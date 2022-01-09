from sys import argv
from flask import Flask, request
from numpy.core.numeric import cross
from firestore import get_data, add_note, post_data
from flask_cors import CORS, cross_origin
from cloudstorage import get_audio
from transcribe import transcribe_file
from record import record

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


@app.route("/get-transcript")
@cross_origin()
def getTranscript():
    args = request.args
    try:
        response = transcribe_file(args['filename'])
    except:
        response = "No transcript for file"
    return response


@app.route("/add-interview")
@cross_origin()
def addInterview():
    args = request.args
    post_data("demo.wav", args['company'], [], args['date'])
    return "200"
