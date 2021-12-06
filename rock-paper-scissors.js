function computerPlay() {
	const moves = ["Rock", "Paper", "Scissors"];
	let move = Math.floor(Math.random() * moves.length);
	return moves[move];
}

function playerPlay() {
	let playerMove = prompt("Enter Rock, Paper or Scissors: ");
	return playerMove
}

const playerSelection = playerPlay();
const computerSelection = computerPlay();

console.log(playerSelection);
console.log(computerSelection);
