let userName
let computerSelection

// COMPUTER PLAYS FUNCTION -----
function computerPlay() {
    const elements = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * elements.length);
    return elements[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.trim().toLowerCase();
    computerSelection = computerSelection.trim().toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie! Try again! ";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return 'You win! ' + playerSelection + ' beats ' + computerSelection;
    } else {
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Which one do you choose: Rock, Paper, or Scissors?");
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);

        console.log(result);

        if (result.startsWith('You win')) {
            playerScore++;
        } else if (result.startsWith('You lose')) {
            computerScore++;
        }
    }

    console.log('Game Over!');
    console.log(`Final Score: You ${playerScore} - ${computerScore} Computer`);

    if (playerScore === computerScore) {
        console.log("It's a tie! No winner.");
    } else if (playerScore > computerScore) {
        console.log('Congratulations! You win the game!');
    } else {
        console.log('Oops! Computer wins the game!');
    }
}

// USER WELCOME FUNCTION -----
function userWelcome(){
    alert("👋 Hello! and welcome to ROCK 🪨, PAPER 📃 and SCISSORS ✂️, we will play a 5 rounds game to see who is better... you or me")
    userName = prompt("First things first, let me know... What's your name?")
    if (!userName) {
        userName = prompt("Oh, come on, don't be shy... tell me")
        if (!userName) {
            userName = "Looser 💩"
            alert(`Whatever, I'll call you ${userName}`)
        }
    }
    let confirmPlay = confirm(`Fantastic, nice to meet you ${userName}, let's start, are you ready?`)
    if (confirmPlay) {
        game()
    } else {
        alert("😂 I don't mind, let's start")
        game()
    }
}


computerPlay()
userWelcome()