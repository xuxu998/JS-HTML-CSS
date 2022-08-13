'use strict';
/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'haha';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value); */
let guess = Math.trunc(Math.random() * 20) + 1;
let tempScore = 0;
let Score = 20;
document.querySelector('.number').textContent = guess;
function resetByDeclaration() {
  guess = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  Score = 20;
  tempScore = 0;
  document.querySelector('.message').textContent = 'Start guessing...';
}
/* const dat = function (dat) {
  return dat;
};
const dat1 = dat => dat; */
document.querySelector('.check').addEventListener('click', function () {
  const guessValue = Number(document.querySelector('.guess').value);
  console.log(guessValue, typeof guessValue);
  if (!guessValue) {
    document.querySelector('.message').textContent = 'No number!';
  } else {
    if (Score > 0) {
      if (guessValue !== guess) {
        document.querySelector('.message').textContent =
          guessValue > guess ? 'Too high' : 'Too low';
        Score--;
        document.querySelector('.label-score').textContent =
          '💯 Score ' + String(Score);
      } else {
        document.querySelector('.message').textContent = 'Correct Number';
        document.querySelector('.label-score').textContent =
          '💯 Score ' + String(Score);
        document.querySelector('.number').textContent = String(guess);
        if (Score > tempScore) {
          console.log(Score);
          document.querySelector('.label-highscore').textContent =
            '🥇 Highscore ' + String(Score);
          tempScore = Score;
        }
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
      }
    } else {
      document.querySelector('.message').textContent = 'You lose the game';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  guess = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  Score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.label-score').textContent =
    '💯 Score ' + String(Score);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
