let data = {}
let currentGenre = ""
let index = 0

let total = 0
let correctCount = 0

// CSV読み込み
async function loadData() {
  const res = await fetch("data.csv")
  const text = await res.text()

  data = parseCSV(text)

  // ジャンル生成
  const genreSelect = document.getElementById("genre")
  genreSelect.innerHTML = ""

  Object.keys(data).forEach(g => {
    const option = document.createElement("option")
    option.value = g
    option.textContent = g
    genreSelect.appendChild(option)
  })

  currentGenre = Object.keys(data)[0]
  showQuestion()
}

// CSV → JS変換
function parseCSV(text) {
  const lines = text.trim().split("\n")
  const result = {}

  // ヘッダー削除
  lines.shift()

  lines.forEach(line => {
    const [genre, q, a] = line.split(",")

    if (!result[genre]) result[genre] = []

    result[genre].push({
      q,
      a
    })
  })

  return result
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