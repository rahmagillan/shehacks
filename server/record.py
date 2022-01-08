import sounddevice as sd
import wavio as wv
  
# Sampling frequency
freq = 16000
  
# Recording duration
duration = 5
  
recording = sd.rec(int(duration * freq), samplerate=freq, channels=1)

sd.wait()
  
wv.write("test0.wav", recording, freq, sampwidth=2)
