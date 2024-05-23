const startGame = () => {
    console.log('Hello world!');
    const OPTIONS = ['rock', 'paper', 'scissors'];
    let computerScore = 0;
    let humanScore = 0;

    for(let i = 0; i < 10; i++) {
        const humanSelection = getHumanChoice(OPTIONS);
        const computerSelection = getComputerChoice(OPTIONS);
        const didThePlayerWin = playRound(humanSelection, computerSelection);
        (didThePlayerWin) ? humanScore++ : computerScore++;
        if(computerScore + humanScore === 5) {
            alert(`Game over!`); 
            break;
        }
    }
}

const playRound = (humanChoice, computerChoice) => {
    if(humanChoice === computerChoice) {
        alert(`Draw!!! Both player selected ${humanChoice}`);
        alert(`Round over`)
    } else if((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')) {
        alert(`You won! ${humanChoice} beats ${computerChoice}`);
        alert(`Round over`)
        return true;
    } else {
        alert(`You lost! ${computerChoice} beats ${humanChoice}`);
        alert(`Round over`);
        return false;
    }
}

const getComputerChoice = (OPTIONS) => {
    let randomizer = Math.floor(Math.random() * OPTIONS.length);

    if(randomizer > OPTIONS.length || randomizer < 0) {
        getComputerChoice(OPTIONS);
    } else {
        console.log(OPTIONS[randomizer]);
        return OPTIONS[randomizer];
    }
}

const getHumanChoice = (OPTIONS) => {
    let humanChoice = prompt('Please choice between rock, paper and scissors', '').toLowerCase();
    if(humanChoice === '') {
        alert('Please choose an option before start the game.');
        getHumanChoice(OPTIONS);
    }
    if (typeof humanChoice !== 'string') {
        alert('Please enter a valid choice.');
        getHumanChoice();
    } 
    if (!OPTIONS.includes(humanChoice)) {
        alert(`${humanChoice} is not a valid choice. Please choose between rock, paper and scissors.`)
    } else {
        return humanChoice;
    }
}

addEventListener('DOMContentLoaded', startGame)
