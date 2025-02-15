import { questions } from './questions.js';
const questionContainer = document.getElementById('question-container');
const answersContainer = document.getElementById('answers-container');

const appendContent = (count, score) => {
  questionContainer.innerHTML = '';
  answersContainer.innerHTML = '';
  const currQuestion = document.createElement('h1');
  currQuestion.textContent = questions[count].question;

  questionContainer.appendChild(currQuestion);
  questions[count].content.forEach(answer => {
    const answerElement = document.createElement('div');
    answerElement.addEventListener('click', () => {
      const correctAnswerIndex = questions[count].correct;
      if (answer === questions[count].content[correctAnswerIndex]) {
        score++;
      }
      count++;
      if (count < questions.length) {
        appendContent(count, score);
      } else {
        endGame(score);
      }
    });
    const answerText = document.createElement('h2');
    answerText.textContent = answer;
    answerElement.appendChild(answerText);

    answersContainer.appendChild(answerElement);
    return [count, score];
  });
};

const startGame = () => {
  let score = 0;
  let count = 0;
  appendContent(count, score);
};

const endGame = score => {
  questionContainer.innerHTML = '';
  answersContainer.innerHTML = '';
  const gameOverText = document.createElement('h1');
  gameOverText.textContent = `Game Over! Your Score is ${score}`;

  questionContainer.appendChild(gameOverText);
  answersContainer.remove();
};

startGame();
