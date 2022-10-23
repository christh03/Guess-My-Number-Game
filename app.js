'use strict';

const again = document.querySelectorAll('.btn')[0];
const check = document.querySelectorAll('.btn')[1];
const randomNumber = () => Math.round(Math.random() * 20);
let secretNunber = randomNumber();
let score = Number(document.querySelector('.score').textContent);
let arr = [];

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

const displayHeadingMessage = message =>
  (document.querySelector('.heading').textContent = message);

const hiddenNumber = (disp, sty) => {
  let display = (document.querySelector('.number').textContent = disp);
  let style = (document.querySelector('.number').style.width = `${sty}rem`);
  return display, style;
};

check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  //  When there is not input
  if (!guess) {
    displayMessage('📛 No number');
  }
  //   When the player wins
  else if (guess > 0) {
    if (guess === secretNunber) {
      hiddenNumber(secretNunber, 28);
      displayHeadingMessage('🎉 won 🎉');
      displayMessage('🎉 Correct number');
      document.querySelector('body').style.backgroundColor = 'rgb(14, 109, 7)';

      arr.push(score);
      let max = arr[0];
      for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > max) {
          max = arr[i];
        }
      }
      document.querySelector('.highscore').textContent = max;
    } else {
      // when guess is too high or too low
      displayMessage(`${guess > secretNunber ? '📈 Too high' : '📉 Too low'}`);

      //  when you lose the score decreases
      if (score > 1) {
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayHeadingMessage('💥 You lost the game');
        displayMessage(`The number was ${secretNunber}`);
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = '#7B0614';
      }
    }
  }
});

again.addEventListener('click', () => {
  displayHeadingMessage('Guess My Number!');
  hiddenNumber('?', 15);
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = 20;
  score = 20;
  document.querySelector('.guess').value = '';
  secretNunber = randomNumber();
});
