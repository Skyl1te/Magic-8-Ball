const answers = [
  "Так",
  "Ні",
  "Можливо",
  "Без сумнівів",
  "Скоріше за все",
  "Питай пізніше",
  "Дуже ймовірно",
  "Я думаю, що ні",
  "Точно так",
  "Краще не знати",
];

let askBtn = document.querySelector(".askBtn");
let ball = document.querySelector(".ball");
let answerText = document.querySelector(".answer-text");

askBtn.addEventListener("click", askMagicBall);

function askMagicBall() {
  const question = document.querySelector(".question").value;

  if (question.trim() == "") {
    alert("Спочатку введи питання!");
    return;
  }

  ball.classList.add("shaking");
  answerText.textContent = "...";

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const answer = answers[randomIndex];
    answerText.textContent = answer;
    ball.classList.remove("shaking");
  }, 800);
}

ball.addEventListener("click", () => {
  askBtn.click();
})


