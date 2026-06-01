let score = JSON.parse(localStorage.getItem('score')) || {
  Wins: 0,
  Losses: 0,
  Tie: 0
};

updateScoreElement();

/*
// The same as above, above use truthy and falsy
if (score === null) {
  score = {
    Wins: 0,
    Losses: 0,
    Tie: 0
  };
}
  */

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMOve();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;

  } else {
    clearInterval(intervalId); 
    isAutoPlaying = false;
  }
}

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  });

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'a') {
    playGame('rock');
  } else if (event.key === 's') {
    playGame('paper');
  } else if (event.key === 'd') {
    playGame('scissors')
  }
});

function playGame(playerMove) {
    const computerMove = pickComputerMOve();

  let result = '';

  if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
      result = 'You Lose.';
    } else if (computerMove === 'paper') {
      result = 'You Win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You Win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You Lose.';
    }
    
  } else if (playerMove === 'rock') {         
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You Lose.';
    } else if (computerMove === 'scissors') {
      result = 'You Win.';
    }
  }

  if (result === 'You Win.') {
    score.Wins += 1;
  } else if (result === 'You Lose.') {
    score.Losses += 1;
  } else if (result === 'Tie.') {
    score.Tie += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = ` You
    <image src="images/${playerMove}-emoji.png" class="move-icon"> 
    <image src="images/${computerMove}-emoji.png" class="move-icon">
    computer`;
}

function updateScoreElement () {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Tie: ${score.Tie}`;
}

function pickComputerMOve() {

  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}

      //https://www.youtube.com/watch?v=EerdGm-ehJQ end at 7:42:36
