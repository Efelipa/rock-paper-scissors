const root = document.querySelector("#root");
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
let humanSelection = '';


rockButton.textContent = 'Rock';
paperButton.textContent = 'Paper';
scissorsButton.textContent = 'Scissors';
rockButton.setAttribute('class', 'game-button');
paperButton.setAttribute('class', 'game-button');
scissorsButton.setAttribute('class', 'game-button');

root.appendChild(rockButton);
root.appendChild(paperButton);
root.appendChild(scissorsButton);

rockButton.addEventListener('click', () => {
    humanSelection = rockButton.textContent;
})

const startGame = () => {
    if(humanSelection !== '') {
        alert(`Game starting`)
    } else {
        throw new Error('Game is not starting')
    }
}

startGame();