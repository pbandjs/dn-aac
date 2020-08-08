import React, { useState, useRef, useEffect } from "react"
import "../styles/HomeAltOne.css"
import { groups } from "../api/builtins"
import speak from "../utils/speak"
import debounce from "../utils/debounce"
import Twemoji from "react-twemoji"

function HomeAltOne() {
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0)
  const [composed, setComposed] = useState("")
  const inputRef = useRef()
  const debouncedSpeak = debounce(phrase => {
    speak(phrase)
  }, 900)

  const debouncedCompose = debounce(phrase => {
    setComposed(phrase)
    inputRef.current.focus()
  }, 500)

  const selectedGroup = groups[selectedGroupIndex]

  const groupWidth = selectedGroup.phraseGroups.reduce((max, curr) => {
    if (curr.phrases.length > max) {
      return curr.phrases.length
    } else {
      return max
    }
  }, 0)

  const groupHeight = selectedGroup.phraseGroups.length + (selectedGroup.mode === "compose" ? 1 : 0)

  // console.log(groupLength)

  const columnWidth = 100 / groupWidth
  const columnHeight = 100 / groupHeight
  // console.log(columnWidth)

  useEffect(
    () => {
      inputRef.current && inputRef.current.focus()
    },
    [inputRef]
  )

  return (
    <div className="Home">
      <div className="Tabs">
        {groups.map((g, i) => (
          <div className="Tab-container" key={"g-" + i}>
            <div
              className={"Tab " + (selectedGroupIndex === i ? g.selectedClass : "") + " " + g.tabClass}
              style={g.tabStyle || {}}
              onClick={e => {
                e.preventDefault()
                setSelectedGroupIndex(i)
              }}
              onContextMenu={e => {
                e.preventDefault()
                setSelectedGroupIndex(i)
              }}
            >
              {g.name}
            </div>
          </div>
        ))}
      </div>
      <div className={"Main " + (selectedGroup.mode === "compose" ? "column" : "")}>
        {selectedGroup.mode === "compose" ? (
          <React.Fragment>
            <div key={"Phrase-composed"} className="Row" style={{ height: columnHeight + "%" }}>
              <div
                className="clear-composed"
                onClick={() => {
                  setComposed("")
                }}
              >
                <Twemoji options={{ className: "emoji" }}>
                  <span>✖️</span>
                </Twemoji>
              </div>

              <div
                className="composed-phrase"
                onClick={() => {
                  setComposed("")
                }}
              >
                <input type="text" value={composed} ref={inputRef} />
              </div>

              <div className="speak-composed">
                <div
                  className="speak-composed-button"
                  onClick={e => {
                    debouncedSpeak(composed.toLowerCase())
                  }}
                >
                  <Twemoji options={{ className: "emoji" }}>
                    <span>🔊</span>
                  </Twemoji>
                </div>
              </div>
            </div>

            {selectedGroup.phraseGroups.map((phraseGroup, i) => (
              <div key={"Phrase-" + i} className="Row" style={{ height: columnHeight + "%" }}>
                {phraseGroup.phrases.map((phrase, j) => (
                  <div key={"Phrase-" + j} className={"Cell"} style={{ width: columnWidth + "%" }}>
                    <div
                      className={"Card " + (phrase.isDummy ? "dummy " : "") + (phrase.class || phraseGroup.class) || ""}
                      onClick={e => {
                        e.preventDefault()
                        debouncedCompose(phrase.value ? phrase.value(composed) : composed + phrase.phrase)
                      }}
                      onContextMenu={e => {
                        e.preventDefault()
                        debouncedCompose(phrase.value ? phrase.value(composed) : composed + phrase.phrase)
                      }}
                    >
                      {!!phrase.icon && (
                        <Twemoji options={{ className: "emoji" }}>
                          <span>{phrase.icon}</span>
                        </Twemoji>
                      )}
                      {phrase.phrase}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </React.Fragment>
        ) : (
          <React.Fragment>
            {selectedGroup.phraseGroups.map((phraseGroup, i) => (
              <div key={"Phrase-" + i} className="Row" style={{ height: columnHeight + "%" }}>
                {phraseGroup.phrases.map((phrase, j) => (
                  <div key={"Phrase-" + j} className="Cell" style={{ width: columnWidth + "%" }}>
                    <div
                      className={"Card " + (phrase.class || phraseGroup.class) || ""}
                      onClick={e => {
                        e.preventDefault()
                        debouncedSpeak(phrase.pronounce || phrase.phrase)
                      }}
                      onContextMenu={e => {
                        e.preventDefault()
                        debouncedSpeak(phrase.pronounce || phrase.phrase)
                      }}
                    >
                      {!!phrase.icon && (
                        <Twemoji options={{ className: "emoji" }}>
                          <span>{phrase.icon}</span>
                        </Twemoji>
                      )}
                      {phrase.phrase}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default HomeAltOne
