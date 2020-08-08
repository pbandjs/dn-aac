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
          { phrase: "MAYA", class: "" },
          { phrase: "MANJU", class: "", pronounce: "Muhnjew" },
          { phrase: "RAMNI", class: "", pronounce: "Rum-knee" },
          { phrase: "LALIT", class: "", pronounce: "Lahlith" }
        ]
      },
      {
        class: "border-yellow-400 background-yellow-100 hover-yellow-400",
        phrases: [
          { phrase: "SUNDER", class: "" },
          { phrase: "MURUGAN", class: "", pronounce: "Mooroogan" },
          { phrase: "KAMAL", class: "" },
          { phrase: "BJ", class: "", pronounce: "Bejay" }
        ]
      },
      {
        class: "border-yellow-400 background-yellow-100 hover-yellow-400",
        phrases: [
          { phrase: "SUBHASH", class: "", pronounce: "Subhash" },
          { phrase: "PINKY", class: "" },
          { phrase: "SUSHILA", class: "", pronounce: "Sosheela" },
          { phrase: "DUBEY", class: "border-purple-400 background-purple-100 hover-purple-400", pronounce: "Dubay" }
        ]
      },
      {
        class: "border-purple-400 background-purple-100 hover-purple-400",
        phrases: [
          { phrase: "SAMSON", class: "border-purple-400 background-purple-100 hover-purple-400" },
          { phrase: "KISHORI", class: "", pronounce: "Kishohri" },
          { phrase: "TIKARAM", class: "", pronounce: "Tikaram" },

          { phrase: "DUKE", class: "border-red-400 background-red-100 hover-red-400" }
        ]
      },
      {
        class: "border-red-400 background-red-100 hover-red-400",
        phrases: [{ phrase: "SUNSHINE", class: "" }, { phrase: "DOLLY", class: "" }, { phrase: "BILLY", class: "" }]
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
        phrases: [{ phrase: "HEY", class: "" }, { phrase: "WHAT'S UP?", class: "" }, { phrase: "HOW ARE YOU?", class: "" }]
      },
      {
        class: "border-green-400 background-green-100 hover-green-400",
        phrases: [
          { phrase: "WHAT'S THE NEWS?", class: "" },
          { phrase: "HOW'S FAMILY?", class: "" },
          { phrase: "HOW'S WORK?", class: "" },
          { phrase: "HOW'S SCHOOL?", class: "" }
        ]
      },
      {
        class: "border-yellow-400 background-yellow-100 hover-yellow-400",
        phrases: [
          { phrase: "HOW'S THE WEATHER?", class: "" },
          { phrase: "LET'S SIT OUTSIDE", class: "" },
          { phrase: "WHAT WOULD YOU LIKE TO HAVE?", class: "" },
          { phrase: "THE TREE IS IN BLOOM", class: "" }
        ]
      },
      {
        class: "border-red-400 background-red-100 hover-red-400",
        phrases: [
          { phrase: "BYE, TAKE CARE", class: "", pronounce: "Bye, Take Care" },
          { phrase: "COME AGAIN", class: "" },
          { phrase: "GOOD NIGHT", class: "" }
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
          { phrase: "I'M HAPPY", class: "", icon: "😀" },
          { phrase: "I'M GOOD", class: "", icon: "🙂" },
          { phrase: "COOL", class: "", icon: "😎" },
          { phrase: "I'M EXCITED", class: "", icon: "😄" },
          { phrase: "I'M FINE", icon: "🙂", class: "" }
        ]
      },
      {
        class: "border-yellow-400 background-yellow-100 hover-yellow-400",
        phrases: [
          { phrase: "I'M HUNGRY", class: "", icon: "🍽️" },
          { phrase: "I'M IN PAIN", class: "", icon: "🤕" },
          { phrase: "I'M TIRED", class: "", icon: "😫" },
          { phrase: "I'M SLEEPY", class: "", icon: "😴" },
          { phrase: "I'M ITCHY", class: "", icon: "🖐️" }
        ]
      },
      {
        class: "border-red-400 background-red-100 hover-red-400",
        phrases: [
          { phrase: "I'M ANGRY", class: "", icon: "😠" },
          { phrase: "I'M SAD", class: "", icon: "😔", pronounce: "I'm Sad" },
          { phrase: "I'M CONFUSED", class: "", icon: "😕" },
          { phrase: "I'M FRUSTRATED", class: "", icon: "😒" }
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

module.exports = {
  // phrases,
  groups
}
