const root = document.querySelector("#root");
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
const buttonsDiv = document.querySelector('.buttons');
const resultsDiv = document.querySelector('.results');
const OPTIONS = ['rock', 'paper', 'scissors'];
let selection;

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
            selection = button.textContent.toLowerCase();
            startGame();
        });
    });
}

const startGame = () => {
    if (humanSelection) {
        const didPlayerWin = playRound(humanSelection, computerSelection);
        for(let i = 0; i < 5; i++) {
            const humanSelection = selection;
            const computerSelection = getComputerChoice(OPTIONS);
            
        }
    } else {
        console.log('Start the game');
    }
};

const humanSelection = getHumanChoice(});


const playRound = (humanChoice, computerChoice) => {
    if(!humanChoice) {
        getHumanChoice();
    } else {
        if(humanChoice === computerChoice) {
            resultsDiv.textContent = 'DRAW';
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

getHumanChoice();
