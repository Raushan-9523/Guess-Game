let maxNum = prompt("Enter the maximum number");

const randomNum = Math.floor(Math.random() * maxNum) + 1;

let guessNum = prompt("Guess the number");

while (true) {
  if (guessNum == "quit") {
    break;
  }
  if (guessNum == randomNum) {
    console.log("you are right ! Congrates!!");
    break;
  } else if (guessNum > randomNum) {
    guessNum = prompt(
      "your guess was large number then random number. Please try again"
    );
  } else if (guessNum < randomNum) {
    guessNum = prompt(
      "you guessed small number then random number. Please try again"
    );
  } else {
    guessedNum = prompt("you guess wrong number. Please try again");
  }
}
