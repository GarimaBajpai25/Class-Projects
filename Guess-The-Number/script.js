let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const restartBtn = document.getElementById("restartBtn");

guessBtn.addEventListener("click", function () {

    let guess = Number(guessInput.value);

    if (guess < 1 || guess > 100 || guessInput.value === "") {
        message.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    attempts++;
    attemptsDisplay.textContent = attempts;

    if (guess === randomNumber) {
        message.textContent = "🎉 Correct! You guessed the number!";
    } 
    else if (guess < randomNumber) {
        message.textContent = "📈 Too low! Try a higher number.";
    } 
    else {
        message.textContent = "📉 Too high! Try a lower number.";
    }

    guessInput.value = "";
});

restartBtn.addEventListener("click", function () {

    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    attemptsDisplay.textContent = attempts;
    message.textContent = "";
    guessInput.value = "";
});