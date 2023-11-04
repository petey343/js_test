// function testFunction(buttonClass) {
//     console.log(document.querySelector(buttonClass)
//         .value);
// };


let playerChoice = '';

function playerSelects(buttonClass) {
    playerChoice = document.querySelector(buttonClass).value;
};


let computerChoice = '';

function computerSelects() {
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerChoice = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerChoice = 'paper';
    } else if (randomNumber >= 2 / 3) {
        computerChoice = 'scissors'
    };
};

function compareOutcome() {
    if (playerChoice === computerChoice) {
        document.querySelector('.outcome').innerHTML = 'TIE'
        console.log('It is a tie');
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        document.querySelector('.outcome').innerHTML = 'YOU WIN'
        console.log('You win');
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        document.querySelector('.outcome').innerHTML = 'YOU WIN'
        console.log('You win');
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        document.querySelector('.outcome').innerHTML = 'YOU WIN'
        console.log('You win');
    } else {
        document.querySelector('.outcome').innerHTML = 'YOU LOSE'
        console.log('You lose')
    };

};