import { randomizeProps, gameOutcomes } from './helpers';

const propContainer = document.getElementById('body');

let allProps = ['scissors', 'paper', 'rock', 'lizard', 'spock'];

console.log(allProps);

let userPicked;
let computerPicked;

propContainer.addEventListener('click', function (e) {
  userPicked = e.target.dataset.prop;
  console.log(userPicked);

  setTimeout(() => {
    computerPicked = randomizeProps(allProps);
    console.log(computerPicked);
    test();
  }, 2000);
});

function test() {
  const outcome = gameOutcomes[userPicked][computerPicked];
  switch (outcome) {
    case 'win':
      console.log('win');
      console.log('add +1');
      break;

    case 'lose':
      console.log('lose');
      console.log('deduct -1');
      break;

    case 'draw':
      console.log('draw');
      break;

    default:
      console.log('draw');
  }
}
