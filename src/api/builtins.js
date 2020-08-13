import speak from "../utils/speak"
import debounce from "lodash.debounce"
// const colors = {
//   blue: {
//     "100": "#99D6FF",
//     "400": "#0093F5",
//     "800": "#00568F"
//   },
//   purple: {
//     "100": "#F5F3F6",
//     "400": "#7E6B8F",
//     "800": "#52465D"
//   },
//   green: {
//     "100": "#EEFBF3",
//     "400": "#96E6B3",
//     "800": "#39D070"
//   },
//   red: {
//     "100": "#E78895",
//     "400": "#DA3E52",
//     "800": "#891A29"
//   },
//   yellow: {
//     "100": "#F9F6B3",
//     "400": "#F2E94E",
//     "800": "#E4D911"
//   },
//   text: {
//     light: "#ffffff",
//     dark: "#000000"
//   }
// }

// const phrases = [
//   ["Call", "Maya", "Murugan", "Kamal", "Bijay", "Subhash", "Samson"],
//   ["Pinky", "Sushila", "Sunder", "Tikaram", "Call Dubey", "Sunshine", "Duke"],
//   ["Wash Room", "Sleep", "Massage", "Stop", "Biscuit", "Dolly", "Billy"],
//   ["Bicycle", "Pain", "Shave", "Want Haircut", "Itching", "I don't agree", "I agree"],
//   ["Hey", "What's up", "How's it going", "Come here", "Tell me more", "Give it to me", "What's the news"]
// ]

const groups = [
  {
    name: "CALL",
    tabClass: "dark-text border-blue-400 background-blue-100 hover-blue-400",
    selectedClass: "background-blue-400",
    phraseGroups: [
      {
        class: "border-green-400 background-green-100 hover-green-400 ",
        phrases: [
          {
            phrase: "MAYA",
            class: "",
            speak: debounce(
              () => {
                speak("Call Maya")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "MANJU",
            class: "",
            pronounce: "Muhnjew",
            speak: debounce(
              () => {
                speak("Call Muhnjew")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "RAMNI",
            class: "",
            pronounce: "Rum-knee",
            speak: debounce(
              () => {
                speak("Call Rumknee")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "LALIT",
            class: "",
            pronounce: "Lahlith",
            speak: debounce(
              () => {
                speak("Call Lahlith")
              },
              2500,
              { leading: true, trailing: false }
            )
          }
        ]
      },
      {
        class: "border-yellow-400 background-yellow-100 hover-yellow-400",
        phrases: [
          {
            phrase: "SUNDER",
            class: "",
            speak: debounce(
              () => {
                speak("Call Sunder")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "MURUGAN",
            class: "",
            pronounce: "Mooroogan",
            speak: debounce(
              () => {
                speak("Call Moorugan")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "KAMAL",
            class: "",
            speak: debounce(
              () => {
                speak("Call Kamal")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "BJ",
            class: "",
            pronounce: "Bejay",
            speak: debounce(
              () => {
                speak("Call BJ")
              },
              2500,
              { leading: true, trailing: false }
            )
          }
        ]
      },
      {
        class: "border-yellow-400 background-yellow-100 hover-yellow-400",
        phrases: [
          {
            phrase: "SUBHASH",
            class: "",
            pronounce: "Subhash",
            speak: debounce(
              () => {
                speak("Call Subhash")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "PINKY",
            class: "",
            speak: debounce(
              () => {
                speak("Call Pinky")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "SUSHILA",
            class: "",
            pronounce: "Sosheela",
            speak: debounce(
              () => {
                speak("Call Sosheela")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "DUBEY",
            class: "border-purple-400 background-purple-100 hover-purple-400",
            pronounce: "Dubay",
            speak: debounce(
              () => {
                speak("Call Dubay")
              },
              2500,
              { leading: true, trailing: false }
            )
          }
        ]
      },
      {
        class: "border-purple-400 background-purple-100 hover-purple-400",
        phrases: [
          {
            phrase: "SAMSON",
            class: "border-purple-400 background-purple-100 hover-purple-400",
            speak: debounce(
              () => {
                speak("Call Samson")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "KISHORI",
            class: "",
            pronounce: "Kishohri",
            speak: debounce(
              () => {
                speak("Call Kishohri")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "TIKARAM",
            class: "",
            pronounce: "Tikaram",
            speak: debounce(
              () => {
                speak("Call Tikaram")
              },
              2500,
              { leading: true, trailing: false }
            )
          },

          {
            phrase: "DUKE",
            class: "border-red-400 background-red-100 hover-red-400",
            speak: debounce(
              () => {
                speak("Call Duke")
              },
              2500,
              { leading: true, trailing: false }
            )
          }
        ]
      },
      {
        class: "border-red-400 background-red-100 hover-red-400",
        phrases: [
          {
            phrase: "SUNSHINE",
            class: "",
            speak: debounce(
              () => {
                speak("Call Sunshine")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "DOLLY",
            class: "",
            speak: debounce(
              () => {
                speak("Call Dolly")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "BILLY",
            class: "",
            speak: debounce(
              () => {
                speak("Call Billy")
              },
              2500,
              { leading: true, trailing: false }
            )
          }
        ]
      }
    ]
  },
  {
    name: "CONVERSE",
    tabClass: "dark-text border-blue-400 background-blue-100 hover-blue-400",
    selectedClass: "background-blue-400",
    phraseGroups: [
      {
        class: "border-green-400 background-green-100 hover-green-400",
        phrases: [
          {
            phrase: "HEY",
            class: "",
            speak: debounce(
              () => {
                speak("Hey")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "WHAT'S UP?",
            class: "",
            speak: debounce(
              () => {
                speak("What's up?")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "HOW ARE YOU?",
            class: "",
            speak: debounce(
              () => {
                speak("How are you?")
              },
              2500,
              { leading: true, trailing: false }
            )
          }
        ]
      },
      {
        class: "border-green-400 background-green-100 hover-green-400",
        phrases: [
          {
            phrase: "WHAT'S THE NEWS?",
            class: "",
            speak: debounce(
              () => {
                speak("What's the news?")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "HOW'S FAMILY?",
            class: "",
            speak: debounce(
              () => {
                speak("How's family?")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "HOW'S WORK?",
            class: "",
            speak: debounce(
              () => {
                speak("How's work?")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "HOW'S SCHOOL?",
            class: "",
            speak: debounce(
              () => {
                speak("How's school?")
              },
              2500,
              { leading: true, trailing: false }
            )
          }
        ]
      },
      {
        class: "border-yellow-400 background-yellow-100 hover-yellow-400",
        phrases: [
          {
            phrase: "HOW'S THE WEATHER?",
            class: "",
            speak: debounce(
              () => {
                speak("How's the weather?")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "LET'S SIT OUTSIDE",
            class: "",
            speak: debounce(
              () => {
                speak("Let's sit outside")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "WHAT WOULD YOU LIKE TO HAVE?",
            class: "",
            speak: debounce(
              () => {
                speak("What would you like to have?")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "THE TREE IS IN BLOOM",
            class: "",
            speak: debounce(
              () => {
                speak("The tree is in bloom")
              },
              2500,
              { leading: true, trailing: false }
            )
          }
        ]
      },
      {
        class: "border-red-400 background-red-100 hover-red-400",
        phrases: [
          {
            phrase: "BYE, TAKE CARE",
            class: "",
            pronounce: "Bye, Take Care",
            speak: debounce(
              () => {
                speak("Bye, take care")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "COME AGAIN",
            class: "",
            speak: debounce(
              () => {
                speak("Come Again")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "GOOD NIGHT",
            class: "",
            speak: debounce(
              () => {
                speak("Good Night")
              },
              2500,
              { leading: true, trailing: false }
            )
          }
        ]
      }
    ]
  },
  {
    name: "FEEL",
    tabClass: "dark-text border-blue-400 background-blue-100 hover-blue-400",
    selectedClass: "background-blue-400",
    phraseGroups: [
      {
        class: "border-green-400 background-green-100 hover-green-400",
        phrases: [
          {
            phrase: "HAPPY",
            class: "",
            icon: "😀",
            speak: debounce(
              () => {
                speak("I'm happy")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "GOOD",
            class: "",
            icon: "🙂",
            speak: debounce(
              () => {
                speak("I'm good")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "COOL",
            class: "",
            icon: "😎",
            speak: debounce(
              () => {
                speak("Cool")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "EXCITED",
            class: "",
            icon: "😄",
            speak: debounce(
              () => {
                speak("I'm excited")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "FINE",
            icon: "🙂",
            class: "",
            speak: debounce(
              () => {
                speak("I'm fine")
              },
              2500,
              { leading: true, trailing: false }
            )
          }
        ]
      },
      {
        class: "border-yellow-400 background-yellow-100 hover-yellow-400",
        phrases: [
          {
            phrase: "HUNGRY",
            class: "",
            icon: "🍽️",
            speak: debounce(
              () => {
                speak("I'm hungry")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "PAIN",
            class: "",
            icon: "🤕",
            speak: debounce(
              () => {
                speak("I'm in pain")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "TIRED",
            class: "",
            icon: "😫",
            speak: debounce(
              () => {
                speak("I'm tired")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "SLEEPY",
            class: "",
            icon: "😴",
            speak: debounce(
              () => {
                speak("I'm sleepy")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "ITCHY",
            class: "",
            icon: "🖐️",
            speak: debounce(
              () => {
                speak("I'm itchy")
              },
              2500,
              { leading: true, trailing: false }
            )
          }
        ]
      },
      {
        class: "border-red-400 background-red-100 hover-red-400",
        phrases: [
          {
            phrase: "ANGRY",
            class: "",
            icon: "😠",
            speak: debounce(
              () => {
                speak("I'm angry")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "SAD",
            class: "",
            icon: "😔",
            pronounce: "I'm Sad",
            speak: debounce(
              () => {
                speak("I'm sad")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "CONFUSED",
            class: "",
            icon: "😕",
            speak: debounce(
              () => {
                speak("I'm confused")
              },
              2500,
              { leading: true, trailing: false }
            )
          },
          {
            phrase: "FRUSTRATED",
            class: "",
            icon: "😒",
            speak: debounce(
              () => {
                speak("I'm frustrated")
              },
              2500,
              { leading: true, trailing: false }
            )
          }
        ]
      }
    ]
  },
  {
    name: "ALPHABETS",
    mode: "compose",
    tabClass: "dark-text border-blue-400 background-blue-100 hover-blue-400",
    selectedClass: "background-blue-400",
    phraseGroups: [
      {
        class: "border-green-400 background-green-100 hover-green-400",
        phrases: [
          { phrase: "A", class: "" },
          { phrase: "B", class: "" },
          { phrase: "C", class: "" },
          { phrase: "D", class: "" },
          { phrase: "E", class: "" },
          { phrase: "F", class: "" }
        ]
      },
      {
        class: "border-green-400 background-green-100 hover-green-400",
        phrases: [
          { phrase: "G", class: "" },
          { phrase: "H", class: "" },
          { phrase: "I", class: "" },
          { phrase: "J", class: "" },
          { phrase: "K", class: "" },
          { phrase: "L", class: "" }
        ]
      },
      {
        class: "border-green-400 background-green-100 hover-green-400",
        phrases: [
          { phrase: "M", class: "" },
          { phrase: "N", class: "" },
          { phrase: "O", class: "" },
          { phrase: "P", class: "" },
          { phrase: "Q", class: "" },
          { phrase: "R", class: "" }
        ]
      },
      {
        class: "border-green-400 background-green-100 hover-green-400",
        phrases: [
          { phrase: "S", class: "" },
          { phrase: "T", class: "" },
          { phrase: "U", class: "" },
          { phrase: "V", class: "" },
          { phrase: "W", class: "" },
          { phrase: "X", class: "" }
        ]
      },
      {
        class: "border-green-400 background-green-100 hover-green-400",
        phrases: [
          { phrase: "Y", class: "" },
          { phrase: "Z", class: "" },
          { phrase: ",", class: "" },
          {
            phrase: "SPACE",
            value: phrase => {
              return phrase + " "
            },
            class: ""
          },
          { phrase: "", class: "", isDummy: true },
          {
            phrase: "BACKSPACE",
            value: phrase => {
              return phrase.slice(0, phrase.length - 1)
            },
            class: ""
          }
        ]
      }
    ]
  }
]

export default groups
