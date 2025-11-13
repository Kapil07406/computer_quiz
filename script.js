const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const sectionSelect = document.getElementById("section");

let currentQuiz = [];
let currentQuestion = 0;
let score = 0;

startBtn.addEventListener("click", () => {
  const selectedSection = sectionSelect.value;
  
  currentQuiz = quizData[selectedSection]
    .sort(() => Math.random() - 0.5) // randomize
    .slice(0, 10); // pick first 10
  
  currentQuestion = 0;
  score = 0;
  startBtn.classList.add("hidden");
  sectionSelect.disabled = true;
  quizEl.classList.remove("hidden");
  loadQuestion();
});

function loadQuestion() {
  const data = currentQuiz[currentQuestion];
  questionEl.textContent = `Q${currentQuestion + 1}. ${data.question}`; // ✅ Added numbering
  optionsEl.innerHTML = "";

  data.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.addEventListener("click", () => checkAnswer(option, data.answer));
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected, correct) {
  if (selected === correct) score++;
  currentQuestion++;

  // ✅ Stops after 10 questions automatically
  if (currentQuestion < currentQuiz.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizEl.classList.add("hidden");
  resultEl.classList.remove("hidden");
  
  // ✅ Result message update
  scoreEl.textContent = `You scored ${score} out of ${currentQuiz.length}`;
}

restartBtn.addEventListener("click", () => {
  resultEl.classList.add("hidden");
  startBtn.classList.remove("hidden");
  sectionSelect.disabled = false;
});

