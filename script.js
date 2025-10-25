let humanScore = 0;
let computerScore = 0;
const gameChoice = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let index = Math.floor(Math.random() * gameChoice.length);
  return gameChoice[index];
}

function getHumanChoice() {
  let playerChoice = prompt(" Please type either rock, paper, or scissors? ");
  return playerChoice.toLocaleLowerCase();
}

function playRound(getComputerChoice, getHumanChoice) {
  if (getComputerChoice === "rock" && getHumanChoice === "scissors") {
    computerScore++;
    console.log(`You lose ${getComputerChoice} beats ${getHumanChoice}!`);
  } else if (getComputerChoice === "scissors" && getHumanChoice === "paper") {
    computerScore++;
    console.log(`You lose ${getComputerChoice} beats ${getHumanChoice}!`);
  } else if (getComputerChoice === "paper" && getHumanChoice === "rock") {
    computerScore++;
    console.log(`You lose ${getComputerChoice} beats ${getHumanChoice}!`);
  } else if (getComputerChoice === getHumanChoice) {
    console.log(
      `You tie! Computer select ${getComputerChoice}: You select ${getHumanChoice}`
    );
  } else {
    humanScore++;
    console.log(`You win ${getHumanChoice} beats ${getComputerChoice}`);
  }
}

function playGame() {
  for (let index = 0; index < 5; index++) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    playRound(computerSelection, humanSelection);
  }
  if (humanScore > computerScore) {
    return `Player wins game: Final Score: Your score ${humanScore} - Computer score ${computerScore} `;
  } else if (humanScore === computerScore) {
    return `No winner game is tie: Final Score: Your score ${humanScore} - Computer score ${computerScore}`;
  } else {
    return `Computer wins game: Final Score: Your score ${humanScore} - Computer score ${computerScore} `;
  }
}

console.log(playGame());
