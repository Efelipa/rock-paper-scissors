const root = document.querySelector("#root");
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
const buttonsDiv = document.querySelector('.buttons');
const scoreDiv = document.querySelector('.score');
const humanScoreDiv = document.querySelector('#human-score');
const pcScoreDiv = document.querySelector('#pc-score');
const resultsDiv = document.querySelector('.results');
const OPTIONS = ['rock', 'paper', 'scissors'];
// Create the human selection and store it inside "selection"
let selection;
let humanScore = 0;
let computerScore = 0;

humanScoreDiv.textContent = `Human Score: ${humanScore}`;
pcScoreDiv.textContent = `Computer Score: ${computerScore}`;
rockButton.textContent = 'Rock';
paperButton.textContent = 'Paper';
scissorsButton.textContent = 'Scissors';

rockButton.setAttribute('class', 'game-button');
paperButton.setAttribute('class', 'game-button');
scissorsButton.setAttribute('class', 'game-button');

// Adding the buttons to the HTML page
buttonsDiv.appendChild(rockButton);
buttonsDiv.appendChild(paperButton);
buttonsDiv.appendChild(scissorsButton);


const getComputerChoice = options => {
    //Choose a random number between the length of the options that we have.
    // return the string with a specific value with randomizer.
    const randomizer = Math.ceil(Math.random() * options.length) - 1;
    return options[randomizer];
}


const getHumanChoice = () => {
    // I select all the button options. 
    const buttons = document.querySelectorAll('button');
    //For each one, when clicking on them will assign their textContent to the selection variable and start the game. 
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // The selection value turn into one of the buttons textContent and turn into lowercase letters
            selection = button.textContent.toLowerCase();
            // Once we got the selection, the game should start
            startGame();
        });
    });
}

const startGame = () => {
    // To start the game, we need three data points, the human selection, the computer selection and a third one
    const humanSelection = selection;
    const computerSelection = getComputerChoice(OPTIONS);
    // didPlayerWin it's a function that returns true if the player won and false if it's not, also the function change some styles and add a text content to specific HTML components
    const didPlayerWin = playRound(humanSelection, computerSelection);
    // The game start only if we got the humanSelection
    if (humanSelection) {
        // If the player win the round, the score will increase by one and the result will update his text content
        if(didPlayerWin) {
            humanScore++;
            humanScoreDiv.textContent = `Human Score: ${humanScore}`;
            // If the human score reaches 5 points, the function gameOver() will be executed with two parameters: the phrase and the boolean true
            if(humanScore >= 5) {
                gameOver(`The player won!`, true);
            }
        // If the computer wins, the computer score will increase by one and the result will update his text content
        } else if (didPlayerWin === false){
            computerScore++;
            pcScoreDiv.textContent = `Computer Score: ${computerScore}`;
            // if the computer reaches 5 points, gameOver will change the text content and return the boolean false.
            if(computerScore >= 5) {
                gameOver(`The computer won!`, false);
            }
        }
    } else {
        console.log('Start the game');
    }
}

// When playing each round, human and computer selection will be required.
const playRound = (humanChoice, computerChoice) => {
    // If we haven't the human choice yet, we'll execute the getHumanChoice function to get it. Otherwise, we'll play the round.
    if(!humanChoice) {
        getHumanChoice();
    } else {
        // When playing the round we will have 3 options: a draw, the player wins or the computer wins.
        // When we got  a draw, we will change the result text content and remove some style and add a specific style. In the same waw with the player victory or defeat.
        if(humanChoice === computerChoice) {
            resultsDiv.textContent = `DRAW! Both are ${humanChoice}`;
            resultsDiv.classList.add('draw');
            resultsDiv.classList.remove('victory');
            resultsDiv.classList.remove('defeat');
        } else if((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')) {
            resultsDiv.textContent = `YOU WON! ${humanChoice} beats ${computerChoice}`;
            resultsDiv.classList.remove('draw');
            resultsDiv.classList.add('victory');
            resultsDiv.classList.remove('defeat');
            return true;
        } else {
            resultsDiv.textContent = `YOU LOSE! ${computerChoice} beats ${humanChoice}`;
            resultsDiv.classList.remove('draw');
            resultsDiv.classList.remove('victory');
            resultsDiv.classList.add('defeat');
            return false;
        }
    }

}

// Game over function works with two parameters: a phrase and a result.
const gameOver = (phrase, result) => {
    // The result div will change his text content with the phrase
    resultsDiv.textContent = phrase;
    // If the result is true, the resulting div will remove some classes and add a special class for the winning party.
    if(result) {
        resultsDiv.classList.remove('draw');
        resultsDiv.classList.remove('victory');
        resultsDiv.classList.remove('defeat');
        resultsDiv.classList.remove('lost');
        resultsDiv.classList.add('won');
    // When you lose the match, the results div will delete other styles and add another special class.
    } else {
        resultsDiv.classList.remove('draw');
        resultsDiv.classList.remove('victory');
        resultsDiv.classList.remove('defeat');
        resultsDiv.classList.remove('won');
        resultsDiv.classList.add('lost');
    }
    // Both scores will update to 0 for the next game and the his text content as well.
    humanScore = 0;
    computerScore = 0;
    humanScoreDiv.textContent = `Human Score: ${humanScore}`;
    pcScoreDiv.textContent = `Computer Score: ${computerScore}`;
}

document.addEventListener('DOMContentLoaded', getHumanChoice);