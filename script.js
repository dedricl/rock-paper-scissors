let humanScore = 0;
let computerScore = 0;
const gameChoice = ["rock", "paper", "scissors"];
let roundGame = 1;
const roundElement = document.querySelector("#round");
const btnContainer = document.querySelector(".btn-container");
const h3Element = document.querySelector("h3");
const result = document.querySelector("#result");

function getComputerChoice() {
  let index = Math.floor(Math.random() * gameChoice.length);
  return gameChoice[index];
}

function playRound(humanSelection) {
  const computerSelection = getComputerChoice();

  if (computerSelection === "rock" && humanSelection === "scissors") {
    computerScore++;
    result.textContent = `You lose ${computerSelection} beats ${humanSelection}!`;
  } else if (computerSelection === "scissors" && humanSelection === "paper") {
    computerScore++;
    result.textContent = `You lose ${computerSelection} beats ${humanSelection}!`;
  } else if (computerSelection === "paper" && humanSelection === "rock") {
    computerScore++;
    result.textContent = `You lose ${computerSelection} beats ${humanSelection}!`;
  } else if (computerSelection === humanSelection) {
    result.textContent = `You tie! Computer select ${computerSelection}: You select ${humanSelection}`;
  } else {
    humanScore++;
    result.textContent = `You win ${humanSelection} beats ${computerSelection}`;
  }
  roundGame++;
  setScore();
  if (roundGame > 5) {
    roundElement.textContent = "GAME OVER!!!";
    endGame();
  }
}

function endGame() {
  btnContainer.style.display = "none";
  h3Element.style.display = "none";
  if (humanScore > computerScore) {
    result.textContent = `Player wins game: Final Score: Your score ${humanScore} - Computer score ${computerScore} `;
    result.style.color = "green";
  } else if (humanScore === computerScore) {
    result.textContent = `No winner game is tie: Final Score: Your score ${humanScore} - Computer score ${computerScore}`;
    result.style.color = "blue";
  } else {
    result.textContent = `Computer wins game: Final Score: Your score ${humanScore} - Computer score ${computerScore} `;
    result.style.color = "red";
  }
}

function setScore() {
  const playerScore = document.querySelector("#humanScore");
  const compScore = document.querySelector("#computerScore");
  roundElement.textContent = `Round ${roundGame} of 5`;
  playerScore.textContent = `Human score is ${humanScore}`;
  compScore.textContent = `Computer score is ${computerScore}`;
  if (roundGame > 5) {
    playerScore.style.display = "none";
    compScore.style.display = "none";
  }
}

function setUpButtonListener() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      playRound(e.target.id);
    });
  });
}

setScore();
setUpButtonListener();
