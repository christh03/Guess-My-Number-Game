'use strict';

const again = document.querySelectorAll('.btn')[0];
const check = document.querySelectorAll('.btn')[1];
const randomNumber = () => Math.round(Math.random() * 20);
let secretNunber = randomNumber();
let score = Number(document.querySelector('.score').textContent);
let arr = [];

check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  //  When there is not input
  if (!guess) {
    document.querySelector('.message').textContent = '📛 No number';
  }
  //   When the player wins
  else if (guess > 0) {
    if (guess === secretNunber) {
      document.querySelector('.number').textContent = secretNunber;
      document.querySelector('.heading').textContent = '🎉 won 🎉';
      document.querySelector('.message').textContent = '🎉 Correct number';
      document.querySelector('body').style.backgroundColor = 'rgb(14, 109, 7)';
      document.querySelector('.number').style.width = '28rem';

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
      document.querySelector('.message').textContent = `${
        guess > secretNunber ? '📈 Too high' : '📉 Too low'
      }`;

      //  when you lose the score decreases
      if (score > 1) {
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.heading').textContent = '💥 You lost the game';
        document.querySelector(
          '.message'
        ).textContent = `The number was ${secretNunber}`;
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = '#7B0614';
      }
    }
  }
});

again.addEventListener('click', () => {
  document.querySelector('.heading').textContent = 'Guess My Number!';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = 20;
  score = 20;
  document.querySelector('.guess').value = '';
  secretNunber = randomNumber();
});
