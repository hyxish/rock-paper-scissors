function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*3)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a Tie";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore += 1;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore += 1;
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1;
        return "You Win! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1;
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1;
        return "You Loose! Scissors beats Rock";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1;
        return "You Win! Scissors beats Paper";
    }
}

function game() {
    for (let i = 0; i <5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Please enter your choice", "rock, paper or scissors").toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    } if (computerScore == playerScore) {
        return "It's a Tie. You both won!"
    } else if (computerScore > playerScore) {
        return "Sorry you lost"
    } else {
        return "Yayyy you won!"
    }
}

console.log(game());