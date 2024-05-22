const startGame = () => {
    console.log('Hello world!');
    const OPTIONS = ['rock', 'paper', 'scissors'];
    const humanSelection = getHumanChoice(OPTIONS);
    const computerSelection = getComputerChoice(OPTIONS);
    let computerScore = 0;
    let humanScore = 0;
    // const playRound = (humanChoice, computerChoice) => {
    //     if(humanChoice === computerChoice) alert(`Draw between ${humanChoice} and ${computerChoice}`);
    //     if(humanChoice === 'rock' && computerChoice === 'paper') {
    //         alert(`You lose, ${computerChoice} beats ${humanChoice}`);
    //         return 'computer';
    //     }
    // }
    // playRound(humanSelection, computerSelection);
    // if(playRound(humanSelection, computerSelection) === 'computer') {
    //     computerScore++;
    // }       
    // console.log(computerScore);
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
