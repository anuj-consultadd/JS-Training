# Rock Paper Scissors Game

A simple command-line implementation of the classic Rock Paper Scissors game in JavaScript.

## Features
- Play against a computer opponent.
- First to 3 points wins the game.
- Validates user input and provides real-time feedback.

## How to Play
1. Run the script in a Node.js environment.
2. Enter either `rock`, `paper`, or `scissors` when prompted.
3. The computer will randomly choose its move.
4. The winner of each round is displayed, and scores are updated.
5. The game continues until one player reaches 3 points.

## Installation & Execution
### Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) installed.

### Steps to Run
1. Clone or download this repository.
2. Navigate to the project folder in your terminal.
3. Install `prompt-sync` (if not already installed) by running:
   ```sh
   npm install prompt-sync
   ```
4. Run the game:
   ```sh
   node RPC.js
   ```

## Game Rules
- **Rock beats Scissors**
- **Paper beats Rock**
- **Scissors beats Paper**
- **Same choices result in a tie**
- The first player to reach **3 points** wins the game.

## Example Gameplay
```
ROCK PAPER SCISSORS
First to 3 points wins!
Type 'rock', 'paper', or 'scissors' to play.

Enter your move: rock
You chose: rock
Computer chose: scissors
You win this round!
Round 1 - Score: You 1, Computer 0

Enter your move: paper
You chose: paper
Computer chose: rock
You win this round!
Round 2 - Score: You 2, Computer 0

Enter your move: scissors
You chose: scissors
Computer chose: rock
Computer wins this round!
Round 3 - Score: You 2, Computer 1

Enter your move: rock
You chose: rock
Computer chose: paper
Computer wins this round!
Round 4 - Score: You 2, Computer 2

Enter your move: paper
You chose: paper
Computer chose: rock
You win this round!
Game over! You won the game!
Restart the game to play again.

```
