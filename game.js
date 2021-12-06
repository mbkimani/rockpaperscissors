let userScore = 0;
let computerScore = 0;

let userInput = () => {
  userChoice = prompt("Rock, Paper, Scissors?").toLowerCase();
  userChoice = userChoice;
  return userChoice;
};

let computerInput = () => {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
};

function playRound(userValue, computerValue) {
  if (userValue == computerValue) {
    return `Computer also picked ${computerValue}. Draw!`;
  } else if (userValue == "rock") {
    if (computerValue == "scissors") {
      userScore++;
      return `You Win! ${userValue} beats ${computerValue}`;
    }
    computerScore++;
    return `You Lose! ${userValue} beats ${computerValue}`;
  } else if (userValue == "paper") {
    if (computerValue == "rock") {
      userScore++;
      return `You Win! ${userValue} beats ${computerValue}`;
    }
    computerScore++;
    return `You Lose! ${userValue} beats ${computerValue}`;
  } else if (userValue == "rock") {
    if (computerValue == "scissors") {
      userScore++;
      return `You Win! ${userValue} beats ${computerValue}`;
    }
    computerScore++;
    return `You Lose! ${userValue} beats ${computerValue}`;
  }
}

for (let i = 0; i < 5; i++) {
  let userValue = userInput();
  let computerValue = computerInput();
  console.log(playRound(userValue, computerValue));
  console.log(userScore, computerScore);
}
userScore > computerScore
  ? console.log(`You won the game`)
  : console.log(`Computer won the game`);
