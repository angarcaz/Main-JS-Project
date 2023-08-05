function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
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


game();
