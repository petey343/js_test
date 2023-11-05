const scores = JSON.parse(localStorage.getItem('jsonscores')) || {
    wins: 0,
    ties: 0,
    losses: 0
};

document.querySelector('.wins').innerHTML = `Wins: ${scores.wins}`;
document.querySelector('.ties').innerHTML = `Ties: ${scores.ties}`;
document.querySelector('.losses').innerHTML = `Losses: ${scores.losses}`;

function playerSelects(buttonClass) {
    // sets the player choice to a variable
    const playerChoice = buttonClass;

    let computerChoice = '';

    // randomly picks computer choice
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerChoice = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerChoice = 'paper';
    } else if (randomNumber >= 2 / 3) {
        computerChoice = 'scissors'
    };

    // shows the choices on screen
    document.querySelector('.player-choice').innerHTML = playerChoice;
    document.querySelector('.computer-choice').innerHTML = computerChoice;

    // determines who wins and updates scores
    if (playerChoice === computerChoice) {
        outcome.ties();
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        outcome.winner();
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        outcome.winner();
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        outcome.winner();
    } else {
        outcome.loser();
    };

    localStorage.setItem('jsonscores', JSON.stringify(scores));
};

const outcome = {
    winner: function () {
        document.querySelector('.outcome').innerHTML = 'YOU WIN'
        scores.wins++;
        document.querySelector('.wins').innerHTML = `Wins: ${scores.wins}`;
    },
    ties: function () {
        document.querySelector('.outcome').innerHTML = 'TIE';
        scores.ties++;
        document.querySelector('.ties').innerHTML = `Ties: ${scores.ties}`;
    },
    loser: function () {
        document.querySelector('.outcome').innerHTML = 'YOU LOSE'
        scores.losses++;
        document.querySelector('.losses').innerHTML = `Losses: ${scores.losses}`;
    }
}

function resetScore() {
    scores.wins = 0;
    scores.losses = 0;
    scores.ties = 0;
    localStorage.clear('jsonscores');
    document.querySelector('.wins').innerHTML = `Wins: ${scores.wins}`;
    document.querySelector('.ties').innerHTML = `Ties: ${scores.ties}`;
    document.querySelector('.losses').innerHTML = `Losses: ${scores.losses}`;
}