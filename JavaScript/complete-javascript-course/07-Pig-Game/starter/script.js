// 'use strict';
// const activePlayer1 = 0;
// const activePlayer2 = 1;
// const numberOfPlayer = 2;
// const initialValue = 0;
// const imageDiceArraySource = [
//   'file:///D:/JavaScript/complete-javascript-course/07-Pig-Game/starter/dice-1.png',
//   'file:///D:/JavaScript/complete-javascript-course/07-Pig-Game/starter/dice-2.png',
//   'file:///D:/JavaScript/complete-javascript-course/07-Pig-Game/starter/dice-3.png',
//   'file:///D:/JavaScript/complete-javascript-course/07-Pig-Game/starter/dice-4.png',
//   'file:///D:/JavaScript/complete-javascript-course/07-Pig-Game/starter/dice-5.png',
//   'file:///D:/JavaScript/complete-javascript-course/07-Pig-Game/starter/dice-6.png',
// ];
// /* button declaration */
// const rollDiceButton = document.querySelector('.btn--roll');
// const holdButton = document.querySelector('.btn--hold');
// const resetButton = document.querySelector('.btn--new');
// const imageDice = document.querySelector('.dice');
// //console.log(imageDice.attributes.src);
// /* some dynamic variable */
// const totalScore = document.querySelectorAll('.score');
// totalScore[activePlayer1].textContent = '0';
// totalScore[activePlayer2].textContent = '0';
// const currentScore = document.querySelectorAll('.current-score');
// const player1 = document.querySelector('.player--0');
// const player2 = document.querySelector('.player--1');
// let activePlayer = activePlayer1;
// let totalCurrentScore = [initialValue, initialValue];
// let diceValue = 0;
// /*function definition */
// const changeDiceImage = function (value) {
//   imageDice.src = imageDiceArraySource[value - 1];
// };
// const getDiceValue = function (activePlayer) {
//   diceValue = Math.trunc(Math.random() * 6) + 1;
//   changeDiceImage(diceValue);
//   currentScore[activePlayer].textContent = String(
//     totalCurrentScore[activePlayer] + diceValue
//   );
//   totalCurrentScore[activePlayer] = totalCurrentScore[activePlayer] + diceValue;
// };
// /* new to factoring this function */
// const changePlayer = function () {
//   if (activePlayer === activePlayer1) {
//     totalScore[activePlayer].textContent = String(
//       Number(totalScore[activePlayer].textContent) +
//         Number(currentScore[activePlayer].textContent)
//     );
//     currentScore[activePlayer].textContent = '0';
//     totalCurrentScore[activePlayer] = 0;
//     activePlayer = activePlayer2;
//     player1.classList.remove('player--active');
//     player2.classList.add('player--active');
//   } else {
//     totalScore[activePlayer].textContent = String(
//       Number(totalScore[activePlayer].textContent) +
//         Number(currentScore[activePlayer].textContent)
//     );
//     currentScore[activePlayer].textContent = '0';
//     totalCurrentScore[activePlayer] = 0;
//     activePlayer = activePlayer1;
//     player2.classList.remove('player--active');
//     player1.classList.add('player--active');
//   }
// };
// rollDiceButton.addEventListener('click', function () {
//   getDiceValue(activePlayer);
//   if (diceValue === 1) {
//     changePlayer();
//   }
// });
// holdButton.addEventListener('click', function () {
//   totalScore[activePlayer].textContent = String(
//     Number(totalScore[activePlayer].textContent) +
//       Number(currentScore[activePlayer].textContent)
//   );
//   currentScore[activePlayer].textContent = '0';
//   if (Number(totalScore[activePlayer].textContent) >= 100) {
//     console.log(`${activePlayer + 1} wins the game`);
//   }
//   changePlayer();
// });
// resetButton.addEventListener('click', function () {
//   for (let i = 0; i < numberOfPlayer; i++) {
//     totalScore[i].textContent = '0';
//     currentScore[i].textContent = '0';
//     totalCurrentScore[i] = 0;
//   }
//   activePlayer = activePlayer1;
// });

//
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
// both of 2 lines above work the same
const rollDiceButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const resetButton = document.querySelector('.btn--new');
const imageDice = document.querySelector('.dice');
let currentScore = 0;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
rollDiceButton.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // if dice == 1 switch next player
  if (dice !== 1) {
    //add dice to current score
    currentScore = currentScore + dice;
    current0El.textContent = currentScore;
  } else {
    //switch to next player
    currentScore = 0;
    current0El.textContent = currentScore;
  }
});
