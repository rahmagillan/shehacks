from google.cloud import storage

def upload_audio(filename): # set filename to id in firestore or something
    client = storage.Client()
    bucket = client.get_bucket('shehacks-audio')
    blob = bucket.blob(filename)
    blob.upload_from_filename('test0.wav')

def list_audio():
    storage_client = storage.Client()
    blobs = storage_client.list_blobs('shehacks-audio')
    for blob in blobs:
        print(blob.name)
    # blob = bucket.get_blob('test0.mp3')

list_audio()