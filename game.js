let userName

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie! Try again!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}
function playAgain() {
    let confirmPlayAgain = confirm(`${userName}, do you want to play again?`);
    if (confirmPlayAgain) {
        setTimeout(game, 100);
    } else {
        alert('👋 Bye bye!');
    }
}


function promptChecker() {
    do {
        playerSelection = prompt("Which one do you choose: Rock 🪨, Paper 📃 or Scissors✂️?");
        if (playerSelection === null) {
            alert("Thank You for Playing. Bye Bye");
            break;
        }
        playerSelection = playerSelection ? playerSelection.toLowerCase() : '';
        selection = ((playerSelection !== 'rock') && (playerSelection !== 'paper') && (playerSelection !== 'scissors'));
        if (selection) {
            console.log(`😡 Come on, ${userName}, You are not following the rules... Please, choose one option`);
        }
    } while (selection);
    return playerSelection;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = "option";
        playerSelection = promptChecker();
        if (!playerSelection) {
            return (
                console.log('You cancelled the game. See you later')
            )
                ;

        }
        let computerSelection = computerPlay();
        computerSelection = computerSelection.toLowerCase();
        const result = playRound(playerSelection, computerSelection);

        if (result.startsWith('You win')) {
            playerScore++;
        } else if (result.startsWith('You lose')) {
            computerScore++;
        } else if (result.startsWith("It's a tie")) {
            playerScore++;
            computerScore++;
        }
        console.log(`Round ${i + 1}: ${result}`);
    }

    console.log('Game Over!');
    console.log(`Final Score: You ${playerScore} - ${computerScore} Computer`);

    if (playerScore === computerScore) {
        alert("It's a tie! No winner.");
    } else if (playerScore > computerScore) {
        alert(`Congratulations, ${userName}! You win the game! 👏🏆`);
    } else {
        alert(`I'm sorry, ${userName} I win ✌️, you lose`);
    }
    playAgain();
}

function userWelcome() {
    userName = prompt("👋 Hello! and welcome to Rock 🪨, Paper 📃 or Scissors✂️, let me know... What's your name?")
    if (!userName) {
        userName = prompt("Oh, come on, don't be shy... tell me")
        if (!userName) {
            userName = "Looser 💩"
            alert(`Whatever, I'll call you ${userName}`)
        }
    }

    setTimeout(() => {
        let confirmPlay = confirm(`Fantastic, nice to meet you ${userName}, let's start, are you ready?`);
        if (confirmPlay) {
            alert("Great! So now click the OK button, open your console and let's start");
            setTimeout(game, 3000);
        } else {
            alert("😂 I don't mind, click the OK button, open your console and let's start");
            setTimeout(game, 3000);
        }
    }, 1000);
}


userWelcome();
