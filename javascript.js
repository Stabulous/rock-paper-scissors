// Uses Math.random to randomise a number between 0 and 2, rounding to nearest whole number.
// Assigns rock, paper or scissors to each of those numbers.
// Sets computer choice as that random variable.
function getComputerChoice() {
    const min = 0;
    const max = 2;
    const computerChoiceIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    let computerChoice;

    if (computerChoiceIndex === 0) {
        computerChoice = "Rock";
    } else if (computerChoiceIndex === 1) {
        computerChoice = "Paper";
    } else if (computerChoiceIndex === 2) {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

// Requests the user enter a variable corresponding to rock, paper or scissors.
// Sets the user choice as the input variable.
function getHumanChoice() {
    let humanChoiceIndex = parseInt(prompt("Please enter your choice; 0 for Rock, 1 for Paper, 2 for Scissors"));
    let humanChoice;

    if (humanChoiceIndex === 0) {
        humanChoice = "Rock";
    } else if (humanChoiceIndex === 1) {
        humanChoice = "Paper";
    } else if (humanChoiceIndex === 2) {
        humanChoice = "Scissors";
    }    return humanChoice;
}

// Sets scoreboard to 0 for each player.
let humanScore = 0;
let computerScore = 0;

// Takes the computer input and human input and compares the two
// Announces winner based on game rules and increments relevant score by 1
function playGame() {
    function playRound(humanChoice, computerChoice) {
        console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`);

        let result = "";

        if (humanChoice === computerChoice) {
            result = "It's a draw";
        } else if (humanChoice === "Rock" && computerChoice === "Paper") {
            result = "Paper beats Rock - you lose!";
            computerScore++;
        } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
            result = "Rock beats Scissors - you win!";
            humanScore++;
        } else if (humanChoice === "Paper" && computerChoice === "Rock") {
            result = "Paper beats Rock - you win!";
            humanScore++;
        } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
            result = "Scissors beats Paper - you lose";
            computerScore++;
        } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            result = "Scissors beats Paper - you win";
            humanScore++;
        } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
            result = "Rock beats Scissors - you lose!";
            computerScore++;
        } else {
            result = "Error in code";
        }
        return result;
    }
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));

// Prints scoreboard
console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
}

// Repeats game 5 times
for (i = 0; i < 5; i++) {
    playGame();
}

// Prints scoreboard after the game has been played 5 times
console.log(`Final score is Human: ${humanScore} vs Computer: ${computerScore}`);