const prompt = require("prompt-sync")(); 

class RockPaperScissors {
  constructor() {
    this.choices = ["rock", "paper", "scissors"];
    this.playerScore = 0;
    this.computerScore = 0;
    this.roundCount = 0;
  }

  play(playerChoice) {
    playerChoice = playerChoice.toLowerCase();
    if (!this.choices.includes(playerChoice)) {
      console.log("Invalid choice! Please choose rock, paper, or scissors.");
      return false;
    }

    const computerChoice =
      this.choices[Math.floor(Math.random() * this.choices.length)];

    console.log(`You chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (playerChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log("You win this round!");
      this.playerScore++;
    } else {
      console.log("Computer wins this round!");
      this.computerScore++;
    }

    this.roundCount++;
    return true;
  }

  showRoundResult() {
    console.log(
      `Round ${this.roundCount} - Score: You ${this.playerScore}, Computer ${this.computerScore}`
    );

    if (this.playerScore >= 3 || this.computerScore >= 3) {
      const winner = this.playerScore > this.computerScore ? "You" : "Computer";
      console.log(`Game over! ${winner} won the game!`);
      return false; 
    }

    return true; 
  }
}


console.log("ROCK PAPER SCISSORS");
console.log("First to 3 points wins!");
console.log("Type 'rock', 'paper', or 'scissors' to play.");


const game = new RockPaperScissors();
let playing = true;

while (playing) {
  const playerChoice = prompt("Enter your move: ").trim();
  if (game.play(playerChoice)) {
    playing = game.showRoundResult();
  }
}

console.log("Restart the game to play again.");