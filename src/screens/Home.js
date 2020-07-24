import React from "react"
import "../styles/Home.css"
import { phrases } from "../api/builtins"
import speak from "../utils/speak"
import debounce from "../utils/debounce"

function Home() {
  const debouncedSpeak = debounce(phrase => {
    speak(phrase)
  }, 900)

  return (
    <div className="Home">
      <div className="Main">
        {phrases.map(group => (
          <div className="Column">
            {group.map(phrase => (
              <div className="Cell">
                <div
                  className="Card"
                  onClick={e => {
                    e.preventDefault()
                    debouncedSpeak(phrase)
                  }}
                  onContextMenu={e => {
                    e.preventDefault()
                    debouncedSpeak(phrase)
                  }}
                >
                  {phrase}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
