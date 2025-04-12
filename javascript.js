function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, randomChoice) {
    let result = "";

    if (humanChoice === randomChoice) {
        result = "It's a draw";
    } else if (humanChoice === "Rock" && randomChoice === "Paper") {
        result = "Paper beats Rock - you lose!";
        computerScore++;
    } else if (humanChoice === "Rock" && randomChoice === "Scissors") {
        result = "Rock beats Scissors - you win!";
        humanScore++;
    } else if (humanChoice === "Paper" && randomChoice === "Rock") {
        result = "Paper beats Rock - you win!";
        humanScore++;
    } else if (humanChoice === "Paper" && randomChoice === "Scissors") {
        result = "Scissors beats Paper - you lose";
        computerScore++;
    } else if (humanChoice === "Scissors" && randomChoice === "Paper") {
        result = "Scissors beats Paper - you win";
        humanScore++;
    } else if (humanChoice === "Scissors" && randomChoice === "Rock") {
        result = "Rock beats Scissors - you lose!";
        computerScore++;
    } else {
        result = "Error in code";
    }

    if (humanScore === 5) {
        alert("Congratulations, you win!")
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        alert("Sorry, you lose! Try again.")
        humanScore = 0;
        computerScore = 0;
    }

    return result;
}

function playGame(humanChoice) {
    const computerChoice = getRandomChoice();
    const result = playRound(humanChoice, computerChoice);

    updateChoices(humanChoice, computerChoice);

    // const playerSign = document.querySelector("#playerSign");
    // const computerSign = document.querySelector("#computerSign");
    // playerSign.textContent = `${humanChoice}`;
    // computerSign.textContent = `${computerChoice}`

    const updatedPlayerScore = document.querySelector("#playerScore");
    updatedPlayerScore.textContent = `Human: ${humanScore}`;

    const updatedComputerScore = document.querySelector("#computerScore");
    updatedComputerScore.textContent = `Computer: ${computerScore}`;
}

const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", () => playGame("Rock"));

const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", () => playGame("Paper"));

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", () => playGame("Scissors"));

function updateChoices(humanChoice, computerChoice) {
    switch (humanChoice) {
      case 'Rock':
        playerSign.textContent = '✊'
        break
      case 'Paper':
        playerSign.textContent = '✋'
        break
      case 'Scissors':
        playerSign.textContent = '✌'
        break
    }
  
    switch (computerChoice) {
      case 'Rock':
        computerSign.textContent = '✊'
        break
      case 'Paper':
        computerSign.textContent = '✋'
        break
      case 'Scissors':
        computerSign.textContent = '✌'
        break
    }
}