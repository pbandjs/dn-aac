(this["webpackJsonpdn-aac"]=this["webpackJsonpdn-aac"]||[]).push([[0],{109:function(e,s,a){"use strict";a.r(s);var r=a(0),n=a.n(r),o=a(25),c=a.n(o),l=(a(33),a(34),a(27)),t=(a(35),a(12));var h=function(e){for(var s=window.speechSynthesis.getVoices(),a=new SpeechSynthesisUtterance(e),r=0;r<s.length;r++)if("Alex"===s[r].name){a.voice=s[r];break}window.speechSynthesis.speak(a)},p=function(e,s){var a;return function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];var c=function(){a=null,e.apply(void 0,n)};clearTimeout(a),a=setTimeout(c,s)}},u=a(26),i=a.n(u);var d=function(){var e=Object(r.useState)(0),s=Object(l.a)(e,2),a=s[0],o=s[1],c=p((function(e){h(e)}),900),u=t.groups[a],d=u.phraseGroups.reduce((function(e,s){return s.phrases.length>e?s.phrases.length:e}),0),b=u.phraseGroups.length,g=100/d,E=100/b;return n.a.createElement("div",{className:"Home"},n.a.createElement("div",{className:"Tabs"},t.groups.map((function(e,s){return n.a.createElement("div",{className:"Tab-container",key:"g-"+s},n.a.createElement("div",{className:"Tab "+(a===s?e.selectedClass:"")+" "+e.tabClass,style:e.tabStyle||{},onClick:function(e){e.preventDefault(),o(s)},onContextMenu:function(e){e.preventDefault(),o(s)}},e.name))}))),n.a.createElement("div",{className:"Main "},u.phraseGroups.map((function(e,s){return n.a.createElement("div",{key:"Phrase-"+s,className:"Row",style:{height:E+"%"}},e.phrases.map((function(s,a){return n.a.createElement("div",{key:"Phrase-"+a,className:"Cell",style:{width:g+"%"}},n.a.createElement("div",{className:"Card "+(s.class||e.class)||!1,onClick:function(e){e.preventDefault(),c(s.pronounce||s.phrase)},onContextMenu:function(e){e.preventDefault(),c(s.pronounce||s.phrase)}},!!s.icon&&n.a.createElement(i.a,{options:{className:"emoji"}},n.a.createElement("span",null,s.icon)),s.phrase))})))}))))};var b=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));window.speechSynthesis&&window.speechSynthesis.getVoices(),c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},12:function(e,s){e.exports={groups:[{name:"CALL",tabClass:"dark-text border-blue-400 background-blue-100 hover-blue-400",selectedClass:"background-blue-400",phraseGroups:[{class:"border-green-400 background-green-100 hover-green-400 ",phrases:[{phrase:"MAYA",class:""},{phrase:"MURUGAN",class:"",pronounce:"Mooroogan"},{phrase:"KAMAL",class:""},{phrase:"BIJAY",class:"",pronounce:"Bejay"}]},{class:"border-green-400 background-green-100 hover-green-400",phrases:[{phrase:"SUBHASH",class:"",pronounce:"Subhash"},{phrase:"SAMSON",class:""},{phrase:"PINKY",class:""},{phrase:"SUSHILA",class:"",pronounce:"Sosheela"}]},{class:"border-yellow-400 background-yellow-100 hover-yellow-400",phrases:[{phrase:"DUBEY",class:"",pronounce:"Dubay"},{phrase:"SUNDER",class:""},{phrase:"TIKARAM",class:"",pronounce:"Tikaram"},{phrase:"DUKE",class:"border-red-400 background-red-100 hover-red-400"}]},{class:"border-red-400 background-red-100 hover-red-400",phrases:[{phrase:"SUNSHINE",class:""},{phrase:"DOLLY",class:""},{phrase:"BILLY",class:""}]}]},{name:"CONVERSE",tabClass:"dark-text border-blue-400 background-blue-100 hover-blue-400",selectedClass:"background-blue-400",phraseGroups:[{class:"border-green-400 background-green-100 hover-green-400",phrases:[{phrase:"HEY",class:""},{phrase:"YES",class:""},{phrase:"WHAT'S NEW?",class:""},{phrase:"HOW ARE YOU?",class:""}]},{class:"border-green-400 background-green-100 hover-green-400",phrases:[{phrase:"HOW'S FAMILY?",class:""},{phrase:"HOW'S WORK?",class:""},{phrase:"HOW'S SCHOOL?",class:""},{phrase:"HOW'S THE WEATHER?",class:""}]},{class:"border-yellow-400 background-yellow-100 hover-yellow-400",phrases:[{phrase:"LET'S SIT OUTSIDE",class:""},{phrase:"WHAT WOULD YOU LIKE TO HAVE?",class:""},{phrase:"THE TREE IS IN BLOOM",class:""}]},{class:"border-red-400 background-red-100 hover-red-400",phrases:[{phrase:"BYE",class:"",pronounce:"Bye"},{phrase:"SEE YOU",class:""},{phrase:"TAKE CARE",class:""},{phrase:"COME AGAIN",class:""}]}]},{name:"FEEL",tabClass:"dark-text border-blue-400 background-blue-100 hover-blue-400",selectedClass:"background-blue-400",phraseGroups:[{class:"border-green-400 background-green-100 hover-green-400",phrases:[{phrase:"HAPPY",class:"",icon:"\ud83d\ude00"},{phrase:"GOOD",class:"",icon:"\ud83d\ude42"},{phrase:"COOL",class:"",icon:"\ud83d\ude0e"},{phrase:"EXCITED",class:"",icon:"\ud83d\ude04"}]},{class:"border-yellow-400 background-yellow-100 hover-yellow-400",phrases:[{phrase:"HUNGRY",class:"",icon:"\ud83c\udf7d\ufe0f"},{phrase:"PAIN",class:"",icon:"\ud83e\udd15"},{phrase:"TIRED",class:"",icon:"\ud83d\ude2b"},{phrase:"SLEEPY",class:"",icon:"\ud83d\ude34"}]},{class:"border-red-400 background-red-100 hover-red-400",phrases:[{phrase:"ANGRY",class:"",icon:"\ud83d\ude20"},{phrase:"SAD",class:"",icon:"\ud83d\ude14",pronounce:"Sad"},{phrase:"CONFUSED",class:"",icon:"\ud83d\ude15"},{phrase:"ANNOYED",class:"",icon:"\ud83d\ude12"}]}]}]}},28:function(e,s,a){e.exports=a(109)},33:function(e,s,a){},34:function(e,s,a){},35:function(e,s,a){}},[[28,1,2]]]);
//# sourceMappingURL=main.99821279.chunk.js.map