let data = {}
let currentGenre = ""
let index = 0

let total = 0
let correctCount = 0

async function loadData() {
  const res = await fetch("data.json")
  data = await res.json()

  const genreSelect = document.getElementById("genre")

  Object.keys(data).forEach(g => {
    const option = document.createElement("option")
    option.value = g
    option.textContent = g
    genreSelect.appendChild(option)
  })

  currentGenre = Object.keys(data)[0]
  showQuestion()
}

function showQuestion() {
  const item = data[currentGenre][index]

  document.getElementById("question").textContent = item.q
  document.getElementById("answer").textContent = item.a

  document.querySelector("details").open = false
}

document.getElementById("genre").addEventListener("change", e => {
  currentGenre = e.target.value
  index = 0
  showQuestion()
})

document.getElementById("next").addEventListener("click", nextQuestion)

function nextQuestion() {
  index++
  if (index >= data[currentGenre].length) index = 0
  showQuestion()
}

document.getElementById("correct").addEventListener("click", () => {
  total++
  correctCount++
  updateStats()
  nextQuestion()
})

document.getElementById("wrong").addEventListener("click", () => {
  total++
  updateStats()
  nextQuestion()
})

function updateStats() {
  document.getElementById("total").textContent = total
  document.getElementById("correctCount").textContent = correctCount
}

loadData()