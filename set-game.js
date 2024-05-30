let buttonText = '';
const root = document.querySelector('#root');
const buttons = document.querySelectorAll('#buttons');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        buttonText = e.target.textContent;
    });
});

const getHumanChoice = () => {
    if(buttonText === 'Rock') {
        console.log('Work')
    }
};

const humanSelection = getHumanChoice();


