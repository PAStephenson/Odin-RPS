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
	if (player.toUpperCase() == computer) {
		return "DRAW";
	} else if (player.toUpperCase() == "ROCK") {
		if (computer == "SCISSORS") {
			return "PLAYER WIN";
		} else if (computer == "PAPER") {
			return "COMPUTER WIN";
		}
	} else if (player.toUpperCase() == "PAPER") {
		if (computer == "ROCK") {
			return "PLAYER WIN";
		} else if (computer == "SCISSORS") {
			return "COMPUTER WIN";
		}
	} else if (player.toUpperCase() == "SCISSORS") {
		if (computer == "PAPER") {
			return "PLAYER WIN";
		} else if (computer == "ROCK") {
			return "COMPUTER WIN";
		}
	}
}

function game() {
	const numberOfGames = 5;
	let playerScore = 0;
	let computerScore = 0;

	for (let i = 0; i < numberOfGames; i++) {
		const playerSelection = playerPlay();
		const computerSelection = computerPlay();

		console.log(`You selected ${playerSelection.toUpperCase()}`);
		console.log(`The computer selected ${computerSelection}`);

		const result = playRound(playerSelection, computerSelection);

		if (result == "PLAYER WIN") {
			playerScore += 1;
		} else {
			computerScore += 1;
		}

		console.log(result);
	}

	if (playerScore == computerScore) {
		console.log(`After ${numberOfGames} games, its a draw.`);
	} else if (playerScore > computerScore) {
		console.log(`After ${numberOfGames} games, you are the overall winner!`);
	} else {
		console.log(`After ${numberOfGames} games, the computer is the overall winner!`);
	}
}

game();
