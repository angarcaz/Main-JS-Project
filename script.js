// REQUERIMENTS:

// a) Create a blank HTML document with a script tag (Hint: it is best practice to link an
// external .js file). This game is going to be played completely from the console, so don’t
// worry about putting anything else in there.

// b) Your game is going to play against the computer, so begin with a function called
// computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this
// function in the game to make the computer’s play. Tip: use the console to make sure this
// is returning the expected output before moving to the next step!

// c) Write a function that plays a single round of Rock Paper Scissors. The function should
// take two parameters - the playerSelection and computerSelection - and then return a
// string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// i. Make your function’s playerSelection parameter case-insensitive (so users can
// input rock, ROCK, RocK or any other variation).

// d) Important note: you want to return the results of this function call, not console.log()
// them. You’re going to use what you return later on, so let’s test this function by using
// console.log to see the results:

// e) Write a NEW function called game(). Call the playRound function inside of this one to
// play a 5 round game that keeps score and reports a winner or loser at the end.

// ii. At this point you should be using console.log() to display the results of each
// round and the winner at the end.

// iii. Use prompt() to get input from the user. Read the docs here.

// iv. Feel free to rework your previous functions if you need to. Specifically, you might
// want to change the return value to something more useful.

// v. Important note: After all this is a game, so make sure you worry about the user
// experience, create some fun text, maybe even a backstory if you feel up to it.
// Make sure your messages are clear and instructions are easy to understand.

// ----------------------------------------------------------

//Global Variables:
let userName
let computerSelection

// USER WELCOME FUNCTION -----
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
        //Here we call the function that starts the game
    } else {
        alert("😂 I don't mind, let's start")
        //Here we call the function that starts the game
    }
}

// COMPUTER PLAYS FUNCTION -----
function computerPlay() {
    const elements = ["rock", "paper", "scissors"];
    computerSelection = Math.floor(Math.random() * elements.length);
    console.log(elements[computerSelection]) //<-- maybe change later for return
  }

computerPlay()
userWelcome()