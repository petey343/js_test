// function testFunction(buttonClass) {
//     console.log(document.querySelector(buttonClass)
//         .value);
// };



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
        document.querySelector('.outcome').innerHTML = 'TIE'
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        document.querySelector('.outcome').innerHTML = 'YOU WIN'
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        document.querySelector('.outcome').innerHTML = 'YOU WIN'
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        document.querySelector('.outcome').innerHTML = 'YOU WIN'
    } else {
        document.querySelector('.outcome').innerHTML = 'YOU LOSE'
    };

};