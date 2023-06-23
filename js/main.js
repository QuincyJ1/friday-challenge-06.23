const resultDOM = document.querySelector('.result')
const yoursDOM = document.querySelector('.yours')
const computerDOM = document.querySelector('.computers')

const buttonDOM1 = document.querySelector('.btn1')
const buttonDOM2 = document.querySelector('.btn2')
const buttonDOM3 = document.querySelector('.btn3')
const buttonDOM4 = document.querySelector('.btn4')
let player = '';
let computer = '';
let result = '';

buttonDOM1.addEventListener('click', (event) => {
    event.preventDefault();
    player = buttonDOM1.innerText;
    computerChoice();
    resultDOM.innerText = whoWon();
    yoursDOM.innerText = `Your choice: ${player}`
    computerDOM.innerText = `Your opponent choice: ${computer}`
})
buttonDOM2.addEventListener('click', (event) => {
    event.preventDefault();
    player = buttonDOM2.innerText;
    computerChoice();
    resultDOM.innerText = whoWon();
    yoursDOM.innerText = `Your choice: ${player}`
    computerDOM.innerText = `Your opponent choice: ${computer}`
})
buttonDOM3.addEventListener('click', (event) => {
    event.preventDefault();
    player = buttonDOM3.innerText;
    computerChoice();
    resultDOM.innerText = whoWon();
    yoursDOM.innerText = `Your choice: ${player}`
    computerDOM.innerText = `Your opponent choice: ${computer}`
})
buttonDOM4.addEventListener('click', (event) => {
    resultDOM.innerText = 'Make your choice';
    yoursDOM.innerText = 'Your choice:';
    computerDOM.innerText = 'Your opponent choice:';
})
function computerChoice () {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        computer = 'Rock'
    }else if (randomNum === 2) {
        computer = 'Paper'
    }else if (randomNum === 3) {
        computer = 'Scissors'
    }
}
function whoWon () {
    if (player === computer) {
        return 'Draw..'
    } else if (computer === 'Rock') {
        return (player === 'Paper') ? 'You win!' : 'You lose..';
    } else if (computer === 'Paper') {
        return (player === 'Scissors') ? 'You Win!' : 'You lose..';
    } else if (computer === 'Scissors') {
        return (player === 'Rock') ? 'You Win!' : 'You lose..'
    }
}




