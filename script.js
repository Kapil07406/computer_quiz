// Sample computer questions
const questions = [
  {
    question: "Which device is known as the brain of the computer?",
    options: ["CPU", "Mouse", "Monitor", "Keyboard"],
    answer: 0,
  },
  {
    question: "What does RAM stand for?",
    options: [
      "Read Access Memory",
      "Random Access Memory",
      "Run Accept Memory",
      "Read Action Memory",
    ],
    answer: 1,
  },
  {
    question: "Which of the following is an output device?",
    options: ["Keyboard", "Printer", "Mouse", "Scanner"],
    answer: 1,
  },
  {
    question: "Which key is used to delete characters to the left of the cursor?",
    options: ["Backspace", "Delete", "Ctrl", "Shift"],
    answer: 0,
  },
  {
    question: "What is the full form of CPU?",
    options: [
      "Central Processing Unit",
      "Control Processing Unit",
      "Central Power Unit",
      "Central Print Unit",
    ],
    answer: 0,
  },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = `${currentQuestion + 1}. ${q.question}`;
  optionsEl.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(i);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  const buttons = optionsEl.querySelectorAll("button");
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) btn.style.backgroundColor = "#28a745";
    else if (i === selected) btn.style.backgroundColor = "#dc3545";
  });
  if (selected === correct) score++;
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) showQuestion();
  else showResult();
};

function showResult() {
  document.getElementById("quiz-box").style.display = "none";
  resultEl.textContent = `✅ Your Score: ${score} / ${questions.length}`;
}

showQuestion();
