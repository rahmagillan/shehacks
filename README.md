# Frontend
`cd app`

### Run Locally
1. `npm install` (once)
2. `npm start`

### Build Locally
`npm run build`

# Backend
`cd server`

### Dependencies
`pip install google-cloud-speech flask`

### Set Up GCloud Auth
1. Ask for the service account credentials
2. Run `export GOOGLE_APPLICATION_CREDENTIALS=<KEY_PATH>`

### Run Transcribe Locally
`python transcribe.py`

### Set Up Flask Locally
1. `export FLASK_APP=server`
2. `export FLASK_ENV=development`

### Run Flask Server
`flask run -p <PORT>`
