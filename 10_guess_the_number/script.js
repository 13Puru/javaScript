
let randomNumber = parseInt(Math.random() * 100 + 1)

const guessedNumber = document.getElementById('guessField')
const submit = document.getElementById('subt')
const prevGuess = document.querySelector('.guesses')
const remainingGuesses = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrhi')
const start = document.querySelector('button')
const startOver = document.querySelector('.resultsParas')

const p = document.createElement('p')

let previousGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const guess = parseInt(guessedNumber.value);
        // console.log(guess);
        validate(guess)
    })
}

function validate(guess) {
    if (isNaN(guess)) {
        alert(`Please Enter a number`)
    } else if (guess < 1) {
        alert(`Enter a number greater than 0`)
    } else if (guess > 100) {
        alert(`Enter a number less than 101`)
    } else {
        previousGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You won. You guessed the number`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Guessed number is lower than the actual number. Try again`)
    } else if (guess > randomNumber) {
        displayMessage(`Guessed number is higher than the actual number. Try again`)
    }
}

function displayGuess(guess) {
    guessedNumber.value = ''; // Clear the input field
    prevGuess.innerHTML += `${guess}, `; // Display the guessed number
    numGuess++; // Increment the guess count
    remainingGuesses.innerHTML = `${11 - numGuess}`; // Update the remaining guesses
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    guessedNumber.value = ''
    guessedNumber.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id ="newgame">Start New Game</h2>`
    startOver.appendChild(p)
    startGame()
}

function startGame() {
    const newGame = document.querySelector('#newgame')
    newGame.addEventListener('click', (e) => {
        randomNumber = parseInt(Math.random() * 100 + 1)
        previousGuess = []
        numGuess = 1;
        prevGuess.innerHTML = ''
        remainingGuesses.innerHTML = `${11 - numGuess}`;
        guessedNumber.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    });
}

