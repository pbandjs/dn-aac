import React from "react"
import "../styles/Phrase.css"
import speak from "../utils/speak"

function Phrase({ phrase }) {
  return (
    <div
      className="Phrase"
      onClick={() => {
        speak(phrase)
      }}
    >
      {phrase}
    </div>
  )
}

export default Phrase
