function speak(phrase) {
  console.log("speaking phrase:", phrase)
  const synth = window.speechSynthesis
  const voices = synth.getVoices()
  // console.log(voices)
  let msg = new SpeechSynthesisUtterance(phrase)
  // msg.pitch = 0.9
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === "Alex") {
      // console.log("Voice found:", voices[i])
      msg.voice = voices[i]
      break
    }
  }
  window.speechSynthesis.speak(msg)
}

export default speak
