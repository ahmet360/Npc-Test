const testForm = document.querySelector("#test-form");
const questionContainer = document.querySelector(".question-container");
const question = document.querySelector(".question");
const progressBarFill = document.querySelector(".progress-bar-fill");

const questions = [
  "Do you have your own unique opinions on political and social issues?",
  "Do you have a unique sense of humor?",
  "Do you have a strong sense of personal identity?",
  // ...
  "Do you have the ability to experience a sense of self and personal identity?"
];

let currentQuestion = 0;

testForm.addEventListener("submit", function(event) {
  event.preventDefault();
  currentQuestion++;
  if (currentQuestion === questions.length) {
    const testForm = document.querySelector("#test-form");
    const questionContainer = document.querySelector(".question-container");
    const question = document.querySelector(".question");
    const progressBarFill = document.querySelector(".progress-bar-fill");
    
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
      "Do you have the ability to experience a sense of self and personal identity?",
      "Do you have the ability to feel pride in your accomplishments and achievements?",
      "Do you have the ability to feel shame and guilt for your mistakes and failures?",
      "Do you have the ability to make and keep promises to others?",
      "Do you have the ability to forgive others for their mistakes and wrongdoings?",
      "Do you have the ability to apologize and take responsibility for your own mistakes?",
      "Do you have the ability to trust and be trustworthy towards others?",
      "Do you have the ability to understand and use non-verbal communication?",
      "Do you have the ability to understand and respond to social cues and norms?",
      "Do you have the ability to form and maintain romantic relationships?",
      "Do you have the ability to form and maintain close friendships?",
      "Do you have the ability to experience empathy for others and feel compassion?",
      "Do you have the ability to feel a sense of guilt or shame for wrongdoings?",
      "Do you have the ability to feel pride and accomplishment for achievements?",
      "Do you have the ability to experience nostalgia for the past?",
      "Do you have the ability to feel hopeful and optimistic about the future?",
      "Do you have the ability to experience regret for missed opportunities or past mistakes?",
      "Do you have the ability to experience a sense of purpose and meaning in life?",
      "Do you have the ability to experience a sense of personal growth and development over time?",
      "Do you have the ability to make decisions based on your own values and beliefs, rather than solely external influences?",
      "Do you have the ability to adapt to new and changing circumstances?",
      "Do you have the ability to set and work towards long-term goals?",
      "Do you have the ability to form and maintain meaningful connections with others?",
      "Do you have the ability to experience a range of positive and negative emotions?",
      "Do you have the ability to feel remorse for past actions and seek forgiveness?",
      "Do you have the ability to forgive others for their actions?",
      "Do you have the ability to experience a sense of belonging and community?",
      "Do you have the ability to experience a sense of individuality and personal uniqueness?",
      "Do you have the ability to understand and respect the perspectives and beliefs of others?",
      "Do you have the ability to collaborate and work well with others?",
      "Do you have the ability to feel fulfilled and satisfied with your life choices?",
      "Do you have the ability to experience a sense of mastery and control over your own life?",
      "Do you have the ability to experience a sense of autonomy and independence?",
      "Do you have the ability to understand and navigate complex social dynamics and relationships?",
      "Do you have the ability to understand and regulate your own emotions?",
      "Do you have the ability to experience a sense of personal growth and self-discovery?",
      "Do you have the ability to form and maintain long-lasting relationships with others?",
      "Do you have the ability to experience a sense of security and stability in your relationships and daily life?",
      "Do you have the ability to experience a sense of trust and dependability in your relationships with others?"
    ];
    
    const totalQuestions = 41;
    let currentQuestion = 0;
    
    // Select the elements for the questions and answers
    const questionContainer = document.getElementById("question-container");
    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const progressBar = document.getElementById("progress-bar");
    
    // Start the quiz
    startQuiz();
    
    function startQuiz() {
      // Reset the current question to 0
      currentQuestion = 0;
    
      // Show the first question
      showQuestion(questions[currentQuestion]);
    }
    
    function showQuestion(question) {
      // Update the question element with the new question
      questionElement.innerText = question;
    
      // Clear the answer buttons
      answerButtons.innerHTML = "";
    
      // Create buttons for each answer
      const buttonTrue = createAnswerButton("True");
      const buttonFalse = createAnswerButton("False");
    
      // Add the buttons to the answerButtons container
      answerButtons.appendChild(buttonTrue);
      answerButtons.appendChild(buttonFalse);
    
      // Handle clicks on the answer buttons
      buttonTrue.addEventListener("click", handleAnswer);
      buttonFalse.addEventListener("click", handleAnswer);
    }
    
    function createAnswerButton(text) {
      // Create a button element
      const button = document.createElement("button");
    
      // Set the text and class for the button
      button.innerText = text;
      button.classList.add("btn");
    
      // Return the new button
      return button;
    }
    
    function handleAnswer(event) {
      // Get the text of the button that was clicked
      const answer = event.target.innerText;
    
      // Check if the answer is correct
      const isCorrect = checkAnswer(answer);
    
      // Show the result of the answer
      showResult(isCorrect);
    
      // Move on to the next question or show the results
      if (currentQuestion + 1 < totalQuestions) {
        currentQuestion++;
        showQuestion(questions[currentQuestion]);
      } else {
        showResults();
      }
    }
    
    function checkAnswer(answer) {
      // Check if the answer is "True"
      return answer === "True";
    }
    
    function showResult(isCorrect) {
      // Show the result message
      const result = isCorrect ? "Correct" : "Incorrect";
      console.log(result);
    }
    
    function showResults() {
      // Show the final results message
      console.log("Quiz Complete");
    }
    
    // Update the progress bar
    function updateProgress() {
      // Calculate the percentage complete
      const percentage = (currentQuestion + 1) / totalQuestions * 100;
    
      // Update the width of the progress bar
      progressBar.style.width = `${percentage}%`;
    }
    