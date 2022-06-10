function guessingGame() {
  let randomNum = Math.floor(Math.random() * 100);
  let isOver = false;
  let guessNum = 0;
  const guess = num => {
    guessNum++;
    if (isOver) {
      return "The game is over, you already won!";
    }
    if (num > randomNum) {
      return `${num} is too high!`;
    } else if (num < randomNum) {
      return `${num} is too low!`;
    } else if (num === randomNum) {
      isOver = true;
      let guess = guessNum > 1 ? "guesses" : "guess";
      return `You win! You found ${randomNum} in ${guessNum} ${guess}.`;
    }
  };
  return guess;
}

module.exports = { guessingGame };
