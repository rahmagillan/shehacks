import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.ApplicationDefault()
firebase_admin.initialize_app(cred, {
    'projectId': 'shehacks-337605',
})

db = firestore.client()

def get_data():
    audio_ref = db.collection('transcripts')
    docs = audio_ref.stream()

    data = {}

    for doc in docs:
        data[doc.id] = doc.to_dict()

    return data

def post_data(id, company, transcript, notes, date):
    doc_ref = db.collection('transcripts').document(id)
    doc_ref.set({
        'transcript': transcript,
        'date': date,
        'company': company,
        'notes': notes
    })

def add_note(id, new_note):
    doc_ref = db.collection('transcripts').document(id)
    notes = doc_ref.get().to_dict()["notes"]
    notes.append(new_note)
    doc_ref.update({
        'notes': notes
    })
    return

# get_data()
# post_data("test2.wav", "Meta", "A long story about something", ["note 1", "note 2"], "January 10, 2022")
# add_note("test2.wav", "test adding a new note")
