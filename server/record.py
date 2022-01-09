import sounddevice as sd
import wavio as wv
from cloudstorage import upload_audio

def record(duration):
    # Sampling frequency
    freq = 16000    
    recording = sd.rec(int(duration * freq), samplerate=freq, channels=1)
    print("Recording...")
    sd.wait()
    wv.write("demo.wav", recording, freq, sampwidth=2)
    upload_audio("demo.wav")

# Test
# record(10) # COMMENT OUT
