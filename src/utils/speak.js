function speak(phrase) {
  let msg = new SpeechSynthesisUtterance(phrase)
  window.speechSynthesis.speak(msg)
}

export default speak
