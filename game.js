function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
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
	let selection = false;
    for (let i = 0; i < 5; i++) 
	{
		let playerSelection = "option";
		do {
			playerSelection = prompt("Which one do you choose: Rock, Paper, or Scissors?");
			playerSelection = playerSelection.trim().toLowerCase();
			selection = ((playerSelection !== 'rock') && (playerSelection !== 'paper') && (playerSelection !== 'scissors'));
			if (selection) {
				console.log('Wrong Option :( Select Again');
			}
		} while(selection);
        let computerSelection = computerPlay();
		computerSelection = computerSelection.trim().toLowerCase();
        const result = playRound(playerSelection, computerSelection);

        if (result.startsWith('You win')) {
            playerScore++;
        } else if (result.startsWith('You lose')) {
            computerScore++;
        } else if (result.startsWith("It's a tie")) {
			playerScore++;
			computerScore++;
		}
		console.log(result);
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

function userWelcome(){
    userName = prompt("👋 Hello! and welcome to ROCK 🪨, PAPER 📃 and SCISSORS ✂️, let me know... What's your name?")
    if (!userName) {
        userName = prompt("Oh, come on, don't be shy... tell me")
        if (!userName) {
            userName = "Looser 💩"
            alert(`Whatever, I'll call you ${userName}`)
        }
    }
    let confirmPlay = confirm(`Fantastic, nice to meet you ${userName}, let's start, are you ready?`)
    if (confirmPlay) {
		alert("Great! open your console and let's start")
        game()
    } else {
        alert("😂 I don't mind, make sure you're watching your console, let's start")
        game()
    }
}

userWelcome();
