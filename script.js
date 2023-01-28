'use strict';

// trunc is to get whole number, no decimals
let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// again button to refresh the game, but remain highscore
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secret = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = '20';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// check button whenever user makes a guess
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // guess is empty or guess is 0
  if (!guess) displayMessage('⛔ Invalid number!');
  // when user wins
  else if (guess === secret) {
    displayMessage(`🎉 You Win!`);
    document.querySelector('.number').textContent = secret;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }

  // if guess is not the value of secret
  else if (guess !== secret) {
    if (score > 1) {
      if (guess > 0 && guess <= 20) {
        displayMessage(guess < secret ? `📉 Too Low!` : `📈 Too High!`);
      } else {
        displayMessage('⛔ Invalid number!');
      }
      --score;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = `0`;
      displayMessage(`😢 You Lose!`);
    }
  }
});
