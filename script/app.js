const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;
const players = [
  {
    name: '',
    symbol: 'X'
  },
  {
    name:'',
    symbol:'O'
  },
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancleConfigButtonElement = document.getElementById('cancle-config-btn');
const startNewoGameBtnElement = document.getElementById('start-game-btn');
// 대안1
// const gameFieldElements = document.querySelectorAll('#game-board li');
// 대안2
const gameBoardElement = document.getElementById('game-board');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

cancleConfigButtonElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit',savePlayerConfig);

startNewoGameBtnElement.addEventListener('click', startNewGame);


// 대안1
// for (const gameFieldElement of gameFieldElements){
//   gameFieldElement.addEventListener('click',selectGameField);
// }
// 대안2
gameBoardElement.addEventListener('click',selectGameField);