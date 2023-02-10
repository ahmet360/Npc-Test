const questions = [
  "Do you have your own unique opinions on political and social issues?",
  "Do you have a unique sense of humor?",
  "Do you have a strong sense of personal identity?",
  // ... the rest of the questions
];

let questionIndex = 0;

const questionEl = document.getElementById("question");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

questionEl.textContent = questions[questionIndex];

yesButton.addEventListener("click", () => {
  // implement your logic here
  questionIndex++;
  if (questionIndex === questions.length) {
    questionEl.textContent = "You have completed the test!";
    yesButton.style.display = "none";
    noButton.style.display = "none";
  } else {
    questionEl.textContent = questions[questionIndex];
  }
});

noButton.addEventListener("click", () => {
  // implement your logic here
  questionIndex++;
  if (questionIndex === questions.length) {
    questionEl.textContent = "You have completed the test!";
    yesButton.style.display = "none";
    noButton.style.display = "none";
  } else {
    questionEl.textContent = questions[questionIndex];
  }
});
