import { operators, calc } from './calc.js';

const gameContainer = document.getElementById('game-container');

let score = 0;
let count = 0;

const createProblemAndAppend = () => {
  const operator = operators[Math.floor(Math.random() * 4)];
  const num1 = Math.floor(Math.random() * 10 + 1);
  const num2 = Math.floor(Math.random() * 10 + 1);

  const problem = num1 + ' ' + operator + ' ' + num2;
  const solution = calc(num1, num2, operator);
  console.log(solution);
  

  const problemElement = document.createElement('p');
  problemElement.id = 'problem';
  problemElement.textContent = problem;
  gameContainer.appendChild(problemElement);

  const inputElement = document.createElement('input');
  inputElement.id = 'answer';
  inputElement.type = 'number';
  gameContainer.appendChild(inputElement);

  const buttonElement = document.createElement('button');
  buttonElement.id = 'answer-button';
  buttonElement.textContent = 'Submit';
  gameContainer.appendChild(buttonElement);

  buttonElement.addEventListener('click', () => {
    const answer = document.getElementById('answer').value;
    if (Number(answer) === solution) {
      score++;
    }
    count++;
    game();
  });

  return solution;
};

const showScore = () => {
  const h1 = document.createElement('h1');
  const p = document.createElement('p');

  if (score <= 5) {
    h1.textContent = 'You Lose!';
  } else if (score > 5 && score <= 9) {
    h1.textContent = 'You Win!';
  } else {
    h1.textContent = 'Perfect Score!';
  }
  p.textContent = `Your Score Is ${score}`;

  gameContainer.appendChild(h1);
  gameContainer.appendChild(p);
};

const game = () => {
  gameContainer.innerHTML = '';
  if (count === 10) {
    showScore();
  } else {
    createProblemAndAppend();
  }
};

const resetGame = () => {
  score = 0;
  count = 0;
  game();
};

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetGame);

game();
