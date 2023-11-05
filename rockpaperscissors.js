// function testFunction(buttonClass) {
//     console.log(document.querySelector(buttonClass)
//         .value);
// };

let wins = 0
let ties = 0
let losses = 0

function playerSelects(buttonClass) {

    const playerChoice = document.querySelector(buttonClass).value;
    let computerChoice = '';

    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerChoice = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerChoice = 'paper';
    } else if (randomNumber >= 2 / 3) {
        computerChoice = 'scissors'
    };

    document.querySelector('.player-choice').innerHTML = 'You chose ' + playerChoice;
    document.querySelector('.computer-choice').innerHTML = 'They chose ' + computerChoice;


    if (playerChoice === computerChoice) {
        document.querySelector('.outcome').innerHTML = 'TIE';
        ties++;
        document.querySelector('.ties').innerHTML = `Ties: ${ties}`;
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        document.querySelector('.outcome').innerHTML = 'YOU WIN'
        wins++;
        document.querySelector('.wins').innerHTML = `Wins: ${wins}`;
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        document.querySelector('.outcome').innerHTML = 'YOU WIN'
        wins++;
        document.querySelector('.wins').innerHTML = `Wins: ${wins}`;
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        document.querySelector('.outcome').innerHTML = 'YOU WIN'
        wins++;
        document.querySelector('.wins').innerHTML = `Wins: ${wins}`;
    } else {
        document.querySelector('.outcome').innerHTML = 'YOU LOSE'
        losses++;
        document.querySelector('.losses').innerHTML = `Losses: ${losses}`;
    };

};