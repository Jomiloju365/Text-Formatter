const action = document.getElementById("action")
function upperCase() {
const text = document.getElementById("text").value
const resultDisplay = document.getElementById("resultDisplay")
let result 

  result = text.toUpperCase()
  resultDisplay.textContent = `${result}` 
}

function lowerCase() {
const text = document.getElementById("text").value
const resultDisplay = document.getElementById("resultDisplay")
let result 

  result = text.toLowerCase()
  resultDisplay.textContent = `${result}` 
}

function titleCase() {
  const text = document.getElementById("text").value
  const resultDisplay = document.getElementById("resultDisplay")
  let result 
  
  let string = text.split(" ")
  let cap
  let firstLetter
  let newSentence = []
  let finalBoss
  for (var i = 0; i < string.length; i++) {
     cap = string[i]
    cap = [...cap]
    for (var a = 0; a < cap.length; a++) {
       finalBoss = cap[0].toUpperCase()
      cap[0] = finalBoss
    }
     cap = cap.join("")
     newSentence.push(cap)
  }
  newSentence = newSentence.join(" ")
  
  result = newSentence
  resultDisplay.textContent = result 
  return result
  
}
function reverseText() {
  const text = document.getElementById("text").value
  const resultDisplay = document.getElementById("resultDisplay")
  let result 
  
  let textArray = [...text]
  let reversedText = textArray.reverse().join("")
  result = reversedText
  resultDisplay.textContent = result
}
function textStats() {
  const text = document.getElementById("text").value
  const resultDisplay = document.getElementById("resultDisplay")

  const characterCount = [...text].length
  const spaces = (text.match(/ /g) || []).length
  const charsWithSpaces = text.length
  const charsWithoutSpaces = charsWithSpaces - spaces

  const result = `
    <div class="stats">
      <h2>Text Statistics</h2>

      <p>
        <strong>Total Characters:</strong> ${characterCount}
      </p>

      <p>
        <strong>Characters With Spaces:</strong> ${charsWithSpaces}
      </p>

      <p>
        <strong>Characters Without Spaces:</strong> ${charsWithoutSpaces}
      </p>

      <p>
        <strong>Spaces:</strong> ${spaces}
      </p>
    </div>
  `

  resultDisplay.innerHTML = result
}


function format() {
  if (action.value === "To upper case") {
    upperCase()
  } else if (action.value === "To lower case") {
  lowerCase()
} else if (action.value === "Title Case") {
   titleCase()
  } else if (action.value === "Reverse Text") {
   reverseText()
  } else if (action.value === "Text Stats") {
   textStats()
  } 
  
}
