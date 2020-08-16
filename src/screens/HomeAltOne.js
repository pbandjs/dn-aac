import React, { useState } from "react"
import "../styles/HomeAltOne.css"
import groups from "../api/builtins"
import speak from "../utils/speak"
// import debounce from "../utils/debounce"
import debounce from "lodash.debounce"
import Twemoji from "react-twemoji"

function HomeAltOne() {
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0)
  const [composed, setComposed] = useState("")
  const debouncedSpeak = debounce(
    () => {
      speak(composed)
    },
    2500,
    { leading: true, trailing: false }
  )
  // const debouncedSpeak = useRef(
  //   debounce(
  //     phrase => {
  //       speak(phrase)
  //     },
  //     2000,
  //     { leading: true, trailing: false }
  //   )
  // ).current
  // //
  // const debouncedCompose = debounce(
  //   phrase => {
  //     setComposed(phrase)
  //     inputRef.current.focus()
  //   },
  //   500,
  //   { leading: true, trailing: false }
  // )

  // const setComposition = phrase => {
  //   console.log("X")
  //   // setComposed(composed + phrase)
  //   inputRef.current.value = inputRef.current.value + phrase
  // }

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

  // useEffect(
  //   () => {
  //     inputRef.current && inputRef.current.focus()
  //   },
  //   [inputRef]
  // )

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
              {/*<div
                className="clear-composed"
                onClick={() => {
                  setComposed("")
                }}
              >
                <Twemoji options={{ className: "emoji" }}>
                  <span>✖️</span>
                </Twemoji>
              </div>*/}

              <div
                className="composed-phrase"
                onClick={() => {
                  // setComposed("")
                }}
              >
                <div className="input">{composed}</div>
                {/*<input
                  type="text"
                  value={composed}
                  ref={inputRef}
                  onFocus={e => {
                    e.preventDefault()
                  }}
                />*/}
              </div>

              <div className="speak-composed">
                <div
                  className="speak-composed-button"
                  onClick={e => {
                    // debounce()
                    debouncedSpeak()
                  }}
                  onContextMenu={e => {
                    e.preventDefault()
                    debouncedSpeak()
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
                  <div key={"Phrase-" + j} className={"Cell"} style={{ width: columnWidth * (phrase.weight || 1) + "%" }}>
                    <div
                      className={"Card " + (phrase.isDummy ? "dummy " : "") + (phrase.class || phraseGroup.class) || ""}
                      onClick={e => {
                        e.preventDefault()
                        phrase.compose(composed, setComposed)
                      }}
                      onContextMenu={e => {
                        e.preventDefault()
                        phrase.compose(composed, setComposed)
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
                  <div key={"Phrase-" + j} className="Cell" style={{ width: columnWidth * (phrase.weight || 1) + "%" }}>
                    <div
                      className={"Card " + (phrase.class || phraseGroup.class) || ""}
                      onClick={e => {
                        e.preventDefault()
                        phrase.speak()
                        // speak(phrase.pronounce || phrase.phrase)
                        // console.log(phrase)
                      }}
                      onContextMenu={e => {
                        e.preventDefault()
                        phrase.speak()
                        // debouncedSpeak(phrase.pronounce || phrase.phrase)
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
