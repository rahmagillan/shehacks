import sounddevice as sd
import wavio as wv
  
def record(duration):
    # Sampling frequency
    freq = 16000    
    recording = sd.rec(int(duration * freq), samplerate=freq, channels=1)
    sd.wait()
    wv.write("test0.wav", recording, freq, sampwidth=2)

# Test
record(5)
