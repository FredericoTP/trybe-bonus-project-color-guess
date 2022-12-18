const ball = document.getElementsByClassName('ball');
const pRgbColor = document.getElementById('rgb-color');
const pAnswer = document.getElementById('answer');
const buttonResetGame = document.getElementById('reset-game');
const scoreNumber = document.getElementById('scoreNumber');

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

function backgroundBall() {
  for (let index = 0; index < ball.length; index += 1) {
    ball[index].style.backgroundColor = randomColor();
  }
}

backgroundBall();

function randomElementClassBall() {
  const element = ball[Math.floor(Math.random() * ball.length)];
  const elementColor = [];
  elementColor.push(element.style.backgroundColor);
  return elementColor;
}

pRgbColor.innerText = randomElementClassBall();
pAnswer.innerText = 'Escolha uma cor';

function ifColorEqual(event) {
  if (event.target.style.backgroundColor === pRgbColor.innerText) {
    pAnswer.innerText = 'Acertou!';
    scoreNumber.innerText = parseInt(scoreNumber.innerText, 10) + 3;
  } else {
    pAnswer.innerText = 'Errou! Tente novamente!';
    scoreNumber.innerText = 0;
  }
}

for (let index = 0; index < ball.length; index += 1) {
  ball[index].addEventListener('click', ifColorEqual);
}

function resetGame() {
  pAnswer.innerText = 'Escolha uma cor';
  backgroundBall();
  pRgbColor.innerText = randomElementClassBall();
}

buttonResetGame.addEventListener('click', resetGame);
