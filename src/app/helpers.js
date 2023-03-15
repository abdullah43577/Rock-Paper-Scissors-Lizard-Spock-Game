export const randomizeProps = function (arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

export const gameOutcomes = {
  rock: {
    scissors: 'win',
    lizard: 'win',
    paper: 'lose',
    spock: 'lose',
  },
  paper: {
    rock: 'win',
    spock: 'win',
    scissors: 'lose',
    lizard: 'lose',
  },
  scissors: {
    paper: 'win',
    lizard: 'win',
    rock: 'lose',
    spock: 'lose',
  },
  lizard: {
    paper: 'win',
    spock: 'win',
    rock: 'lose',
    scissors: 'lose',
  },
  spock: {
    rock: 'win',
    scissors: 'win',
    paper: 'lose',
    lizard: 'lose',
  },
};
