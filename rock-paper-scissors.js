function computerPlay() {
	const moves = ["ROCK", "PAPER", "SCISSORS"];
	let move = Math.floor(Math.random() * moves.length);
	return moves[move];
}

function playerPlay() {
	let playerMove = prompt("Enter Rock, Paper or Scissors: ");
	return playerMove;
}

function playRound(player, computer) {
	const winMessage = "You Win!"
	const loseMessage = "You Lose!"
	const drawMessage = "Draw!"

	if (player.toUpperCase() == computer) {
		return drawMessage;
	} else if (player.toUpperCase() == "ROCK") {
		if (computer == "SCISSORS") {
			return winMessage;
		} else if (computer == "PAPER") {
			return loseMessage;
		}
	} else if (player.toUpperCase() == "PAPER") {
		if (computer == "SCISSORS") {
			return winMessage;
		} else if (computer == "ROCK") {
			return loseMessage;
		}
	} else if (player.toUpperCase() == "SCISSORS") {
		if (computer == "PAPER") {
			return winMessage;
		} else if (computer == "ROCK") {
			return loseMessage;
		}
	}
}

function game() {
	const numberOfGames = 5;

	for (let i = 0; i < numberOfGames; i++) {
		const playerSelection = playerPlay();
		const computerSelection = computerPlay();

		console.log(`You selected ${playerSelection.toUpperCase()}`);
		console.log(`The computer selected ${computerSelection}`);

		const result = playRound(playerSelection, computerSelection);

		console.log(result);
	}
}

game();
