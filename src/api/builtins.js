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
          { phrase: "MURUGAN", class: "", pronounce: "Mooroogan" },
          { phrase: "KAMAL", class: "" },
          { phrase: "BIJAY", class: "", pronounce: "Bejay" }
        ]
      },
      {
        class: "border-green-400 background-green-100 hover-green-400",
        phrases: [
          { phrase: "SUBHASH", class: "", pronounce: "Subhash" },
          { phrase: "SAMSON", class: "" },
          { phrase: "PINKY", class: "" },
          { phrase: "SUSHILA", class: "", pronounce: "Sosheela" }
        ]
      },
      {
        class: "border-yellow-400 background-yellow-100 hover-yellow-400",
        phrases: [
          { phrase: "DUBEY", class: "", pronounce: "Dubay" },
          { phrase: "SUNDER", class: "" },
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
        phrases: [
          { phrase: "HEY", class: "" },
          { phrase: "YES", class: "" },
          { phrase: "WHAT'S NEW?", class: "" },
          { phrase: "HOW ARE YOU?", class: "" }
        ]
      },
      {
        class: "border-green-400 background-green-100 hover-green-400",
        phrases: [
          { phrase: "HOW'S FAMILY?", class: "" },
          { phrase: "HOW'S WORK?", class: "" },
          { phrase: "HOW'S SCHOOL?", class: "" },
          { phrase: "HOW'S THE WEATHER?", class: "" }
        ]
      },
      {
        class: "border-yellow-400 background-yellow-100 hover-yellow-400",
        phrases: [
          { phrase: "LET'S SIT OUTSIDE", class: "" },
          { phrase: "WHAT WOULD YOU LIKE TO HAVE?", class: "" },
          { phrase: "THE TREE IS IN BLOOM", class: "" }
        ]
      },
      {
        class: "border-red-400 background-red-100 hover-red-400",
        phrases: [
          { phrase: "BYE", class: "", pronounce: "Bye" },
          { phrase: "SEE YOU", class: "" },
          { phrase: "TAKE CARE", class: "" },
          { phrase: "COME AGAIN", class: "" }
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
          { phrase: "HAPPY", class: "", icon: "😀" },
          { phrase: "GOOD", class: "", icon: "🙂" },
          { phrase: "COOL", class: "", icon: "😎" },
          { phrase: "EXCITED", class: "", icon: "😄" }
        ]
      },
      {
        class: "border-yellow-400 background-yellow-100 hover-yellow-400",
        phrases: [
          { phrase: "HUNGRY", class: "", icon: "🍽️" },
          { phrase: "PAIN", class: "", icon: "🤕" },
          { phrase: "TIRED", class: "", icon: "😫" },
          { phrase: "SLEEPY", class: "", icon: "😴" }
        ]
      },
      {
        class: "border-red-400 background-red-100 hover-red-400",
        phrases: [
          { phrase: "ANGRY", class: "", icon: "😠" },
          { phrase: "SAD", class: "", icon: "😔", pronounce: "Sad" },
          { phrase: "CONFUSED", class: "", icon: "😕" },
          { phrase: "ANNOYED", class: "", icon: "😒" }
        ]
      }
    ]
  }
]

module.exports = {
  // phrases,
  groups
}
