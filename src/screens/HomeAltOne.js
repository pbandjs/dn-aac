import React, { useState } from "react"
import "../styles/HomeAltOne.css"
import { groups } from "../api/builtins"
import speak from "../utils/speak"
import debounce from "../utils/debounce"
import Twemoji from "react-twemoji"

function HomeAltOne() {
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0)
  const debouncedSpeak = debounce(phrase => {
    speak(phrase)
  }, 900)

  const selectedGroup = groups[selectedGroupIndex]

  const groupWidth = selectedGroup.phraseGroups.reduce((max, curr) => {
    if (curr.phrases.length > max) {
      return curr.phrases.length
    } else {
      return max
    }
  }, 0)

  const groupHeight = selectedGroup.phraseGroups.length

  // console.log(groupLength)

  const columnWidth = 100 / groupWidth
  const columnHeight = 100 / groupHeight
  // console.log(columnWidth)

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
      <div className="Main ">
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
      </div>
    </div>
  )
}

export default HomeAltOne
