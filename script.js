const questions = [
  "Do you have your own unique opinions on political and social issues?",
  "Do you have a unique sense of humor?",
  "Do you have a strong sense of personal identity?",
  "Do you have a moral code that you follow?",
  "Do you have dreams and aspirations for the future?",
  "Do you have unique preferences and tastes in entertainment, food, and fashion?",
  "Do you have unique experiences and memories from your past?",
  "Do you have the ability to feel empathy for others?",
  "Do you have the ability to feel a range of emotions?",
  "Do you have the ability to experience self-reflection and introspection?",
  "Do you have the ability to make decisions based on logic and reasoning?",
  "Do you have the ability to make decisions based on personal beliefs and values?",
  "Do you have the ability to form and maintain personal relationships?",
  "Do you have the ability to experience pleasure and pain?",
  "Do you have the ability to set and work towards personal goals?",
  "Do you have the ability to learn and grow as a person?",
  "Do you have the ability to change your opinions and beliefs over time?",
  "Do you have the ability to understand and use language?",
  "Do you have the ability to communicate effectively with others?",
  "Do you have the ability to imagine and create things?",
  "Do you have the ability to understand abstract concepts and ideas?",
  "Do you have the ability to solve problems and overcome challenges?",
  "Do you have the ability to experience consciousness and self-awareness?",
  "Do you have a unique personality and character traits?",
  "Do you have personal beliefs and values that shape your actions and decisions?",
  "Do you have a personal sense of right and wrong?",
  "Do you have the ability to reason and make informed decisions?",
  "Do you have the ability to make decisions based on your own free will?",
  "Do you have the ability to feel genuine happiness and contentment?",
  "Do you have the ability to feel genuine sadness and despair?",
  "Do you have the ability to feel anger, frustration, and other negative emotions?",
  "Do you have the ability to feel love and affection for others?",
  "Do you have the ability to form and maintain meaningful relationships with others?",
  "Do you have the ability to feel physical sensations such as pleasure and pain?",
  "Do you have the ability to experience the world through your own senses and perception?",
  "Do you have the ability to form and pursue your own goals and ambitions?",
  "Do you have the ability to control your own thoughts and actions?",
  "Do you have the ability to learn from mistakes and improve yourself?",
  "Do you have the ability to change your behavior and habits over time?",
  "Do you have the ability to experience a sense of self and personal identity?"
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
