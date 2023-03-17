import { randomizeProps, gameOutcomes } from './helpers';
import bgSound1 from 'url:../soundTracks/8-bit-dream-land-142093.mp3';
import bgSound2 from 'url:../soundTracks/stranger-things-124008.mp3';
import bgSound3 from 'url:../soundTracks/win-at-any-cost-16273.mp3';
import win from 'url:../soundTracks/success-1-6297.mp3';
import lose from 'url:../soundTracks/mixkit-horror-lose-2028.wav';
import draw from 'url:../soundTracks/piano-crash-sound-37898.mp3';

const body = document.querySelector('body');
const propContainer = document.getElementById('body');
const player1 = document.querySelector('.player1');
const computer = document.querySelector('.computer');
const winnerDeclarator = document.querySelector('.winnerDeclarator');
const playAgain = document.querySelector('.playAgain');
const points = document.querySelector('.points');
const winorlose = document.querySelector('.winorlose');
const rulesWindow = document.querySelector('.rulesModal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.iconClose');
const rulesBtn = document.querySelector('.rules');
let pointsAccumulated = parseInt(localStorage.getItem('points')) || 0;

let allProps = ['scissors', 'paper', 'rock', 'lizard', 'spock'];

let userPicked;
let computerPicked;
let audioPlaying = false;

const allBgAudio = [bgSound1, bgSound2, bgSound3];

// play background audio
const audio = function (parameter) {
  if (!audioPlaying) {
    let audioEl = new Audio(parameter);
    audioEl.volume = 0.1;

    audioEl.play();
    audioPlaying = true;

    audioEl.onended = () => {
      audioPlaying = false;
      let randomAudio = randomizeProps(allBgAudio);
      audio(randomAudio);
    };
  }
};

const winOrLoseSound = function (parameter) {
  const audioElement = new Audio(parameter);
  audioElement.play();
};

propContainer.addEventListener('click', function (e) {
  let randomAudio = randomizeProps(allBgAudio);
  audio(randomAudio);

  // simulating result here like real life rock paper scissors game
  userPicked = e.target.dataset.prop;
  computerPicked = randomizeProps(allProps);

  // hide current container
  propContainer.classList.add('hidden');

  // set the flex property of the body element
  body.classList.add('playerActive');

  let userSelected = document.querySelector(`.outer-container--${userPicked}`);

  userSelected.classList.add('mobile-outer--container');
  userSelected.firstElementChild.classList.add('mobile-inner--container');

  // append player1 selected item into container
  player1.appendChild(userSelected.cloneNode(true));

  // unhide the container to declare winner
  winnerDeclarator.classList.remove('hidden');

  setTimeout(() => {
    let computerSelected = document.querySelector(`.outer-container--${computerPicked}`);

    computerSelected.classList.add('mobile-outer--container');
    computerSelected.firstElementChild.classList.add('mobile-inner--container');

    computer.appendChild(computerSelected.cloneNode(true));
    simulateResult();
  }, 2000);
});

const unveilPlayAgainBtn = function () {
  setTimeout(() => {
    playAgain.classList.remove('hidden');
  }, 1000);
};

if (pointsAccumulated) points.textContent = pointsAccumulated;

const simulateResult = function () {
  const outcome = gameOutcomes[userPicked][computerPicked];
  winorlose.classList.remove('hidden');
  switch (outcome) {
    case 'win':
      winorlose.textContent = 'you win';
      winOrLoseSound(win);
      unveilPlayAgainBtn();
      points.textContent = Number(points.textContent) + 1;
      localStorage.setItem('points', points.textContent.toString());
      break;

    case 'lose':
      winorlose.textContent = 'you lose';
      winOrLoseSound(lose);
      unveilPlayAgainBtn();
      // check to see if the value is going to negative angle
      if (Number(points.textContent) < 1) {
        points.textContent = 0;
        return;
      }
      points.textContent = Number(points.textContent) - 1;
      localStorage.setItem('points', points.textContent.toString());
      break;

    case 'draw':
      winorlose.textContent = 'draw!';
      winOrLoseSound(draw);
      unveilPlayAgainBtn();
      break;

    default:
      winorlose.textContent = 'draw!';
      winOrLoseSound(draw);
      unveilPlayAgainBtn();
  }
};

playAgain.addEventListener('click', function () {
  propContainer.classList.remove('hidden');
  winnerDeclarator.classList.add('hidden');
  body.classList.remove('playerActive');
  player1.innerHTML = computer.innerHTML = '';
  winorlose.classList.add('hidden');
  playAgain.classList.add('hidden');
});

const showModalWindow = function () {
  rulesWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
  rulesWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

rulesBtn.addEventListener('click', showModalWindow);
btnCloseModal.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);
