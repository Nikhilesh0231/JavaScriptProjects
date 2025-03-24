const form = document.querySelector('form');
const button = document.querySelector("#btn");
const prevGuess = document.querySelector("#prevguess");
const remainingGuess = document.querySelector("#RemainigGuess");
const result = document.querySelector("#result");
const inputField = document.querySelector("#input");

// Generate random number once
let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);

let attempts = 10; // Track remaining attempts
let guessedNumbers = []; // Store previous guesses

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  let input = parseInt(inputField.value);
  
  if (isNaN(input) || input < 0 || input > 100) {
    result.innerHTML = `Please enter a valid number between 1 and 100.`;
    return;
  }

  guessedNumbers.push(input);
  prevGuess.innerHTML = `Previous Guesses: ${guessedNumbers.join(', ')}`;

  if (input === randomNumber) {
    result.innerHTML = `🎉 Congratulations! You guessed it right!`;
    form.removeEventListener('submit', arguments.callee); // Stop game on correct guess
  } else {
    attempts--;
    result.innerHTML = `❌ Wrong guess! Try again.`;
    remainingGuess.innerHTML = `Remaining Guesses: ${attempts}`;
    
    if (attempts === 0) {
      result.innerHTML = `😢 Game Over! The correct number was ${randomNumber}.`;
      form.removeEventListener('submit', arguments.callee);
    }
  }
  
  inputField.value = ''; // Clear input field
});
