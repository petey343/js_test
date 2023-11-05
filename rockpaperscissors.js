const scores = JSON.parse(localStorage.getItem('jsonscores')) || {
    wins: 0,
    ties: 0,
    losses: 0
};

const pageElements = {
    winLabel: document.querySelector('.wins'),
    tieLabel: document.querySelector('.ties'),
    loseLabel: document.querySelector('.losses'),
    outcomeLabel: document.querySelector('.outcome'),
    playerChoiceLabel: document.querySelector('.player-choice'),
    computerChoiceLabel: document.querySelector('.computer-choice')
};

pageElements.winLabel.innerHTML = `Wins: ${scores.wins}`;
pageElements.tieLabel.innerHTML = `Ties: ${scores.ties}`;
pageElements.loseLabel.innerHTML = `Losses: ${scores.losses}`;


function computerChoice() {
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        return 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        return 'paper';
    } else if (randomNumber >= 2 / 3) {
        return 'scissors'
    };
}

function playerSelects(playerChoice) {
    const computerChoiceResult = computerChoice();

    // shows the choices on screen
    pageElements.playerChoiceLabel.innerHTML = playerChoice;
    pageElements.computerChoiceLabel.innerHTML = computerChoiceResult;

    // determines who wins and updates scores
    if (playerChoice === computerChoiceResult) {
        outcome.ties();
    } else if (playerChoice === 'rock' && computerChoiceResult === 'scissors') {
        outcome.winner();
    } else if (playerChoice === 'scissors' && computerChoiceResult === 'paper') {
        outcome.winner();
    } else if (playerChoice === 'paper' && computerChoiceResult === 'rock') {
        outcome.winner();
    } else {
        outcome.loser();
    };

    localStorage.setItem('jsonscores', JSON.stringify(scores));
};

const outcome = {
    winner() {
        pageElements.outcomeLabel.innerHTML = 'YOU WIN';
        scores.wins++;
        pageElements.winLabel.innerHTML = `Wins: ${scores.wins}`;
    },
    ties() {
        pageElements.outcomeLabel.innerHTML = 'TIE';
        scores.ties++;
        pageElements.tieLabel.innerHTML = `Ties: ${scores.ties}`;
    },
    loser() {
        pageElements.outcomeLabel.innerHTML = 'YOU LOSE';
        scores.losses++;
        pageElements.loseLabel.innerHTML = `Losses: ${scores.losses}`;
    }
}

function resetScore() {
    scores.wins = 0;
    scores.losses = 0;
    scores.ties = 0;
    localStorage.clear('jsonscores');
    pageElements.winLabel.innerHTML = `Wins: ${scores.wins}`;
    pageElements.tieLabel.innerHTML = `Ties: ${scores.ties}`;
    pageElements.loseLabel.innerHTML = `Losses: ${scores.losses}`;
}