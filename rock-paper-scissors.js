// User Interface variables
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const winnerMessage = document.querySelector("#winnerMessage");
const moveMessage = document.querySelector("#moveMessage");
const playerMove = document.querySelector("#playerMove");
const computerMove = document.querySelector("#computerMove");
const playerTotal = document.querySelector("#playerTotal");
const computerTotal = document.querySelector("#computerTotal");

btnRock.addEventListener("click", () => {game("ROCK")});
btnPaper.addEventListener("click", () => {game("PAPER")});
btnScissors.addEventListener("click", () => {game("SCISSORS")});

// Model overall winner message variables
const modelContainer = document.querySelector("#modelContainer");
const modelMessage = document.querySelector("#modelMessage");
const btnModel = document.querySelector("#btnModel");

btnModel.addEventListener("click", () => {resetGame()});

// Game variables
let playerScore = 0;
let computerScore = 0;
const numberOfGames = 5;

function updateMove(player, computer) {
	switch (player) {
		case "ROCK":
			playerMove.textContent = "🪨";
			break;
		case "PAPER":
			playerMove.textContent = "📄";
			break;
		case "SCISSORS":
			playerMove.textContent = "✂️";
			break;
	}

	switch (computer) {
		case "ROCK":
			computerMove.textContent = "🪨";
			break;
		case "PAPER":
			computerMove.textContent = "📄";
			break;
		case "SCISSORS":
			computerMove.textContent = "✂️";
			break;
		}
}

function updateScore() {
	playerTotal.textContent = `Player: ${playerScore}`;
	computerTotal.textContent = `Computer: ${computerScore}`;
}

function updateMessage(player, computer, result) {
	if (result == "DRAW") {
		winnerMessage.textContent = "Its a Draw"
		// Puts player move into title case (first letter capital, rest lower)
		playerTitle = player.charAt(0) + player.slice(1).toLowerCase();
		moveMessage.textContent = `${playerTitle} draws with ${computer.toLowerCase()}`
	} else if (result == "PLAYER WIN") {
		winnerMessage.textContent = "You win!"
		// Puts player move into title case (first letter capital, rest lower)
		playerTitle = player.charAt(0) + player.slice(1).toLowerCase();
		moveMessage.textContent = `${playerTitle} beats ${computer.toLowerCase()}`
	} else if (result == "COMPUTER WIN") {
		winnerMessage.textContent = "You lose!"
		// Puts computer move into title case (first letter capital, rest lower)
		computerTitle = computer.charAt(0) + computer.slice(1).toLowerCase();
		moveMessage.textContent = `${computerTitle} beats ${player.toLowerCase()}`
	}
}

function endGame(result) {
	modelContainer.classList.add("show");   

	switch (result) {
		case "PLAYER WIN":	
			modelMessage.textContent = "You won!";
			break;
		case "COMPUTER WIN":
			modelMessage.textContent = "You lost!";
			break;
	}
}

function resetGame() {
	modelContainer.classList.remove("show"); 

	playerScore = 0;
	computerScore = 0;
	updateScore();

	playerMove.textContent = "?";
	computerMove.textContent = "?";
	winnerMessage.textContent = "Choose Your Move";
	moveMessage.textContent = "First to 5 points wins";
}

function computerPlay() {
	const moves = ["ROCK", "PAPER", "SCISSORS"];
	const move = Math.floor(Math.random() * moves.length);
	return moves[move];
}

function playRound(player, computer) {
	if (player == computer) {
		return "DRAW";
	} else if (player == "ROCK") {
		if (computer == "SCISSORS") {
			return "PLAYER WIN";
		} else if (computer == "PAPER") {
			return "COMPUTER WIN";
		}
	} else if (player == "PAPER") {
		if (computer == "ROCK") {
			return "PLAYER WIN";
		} else if (computer == "SCISSORS") {
			return "COMPUTER WIN";
		}
	} else if (player == "SCISSORS") {
		if (computer == "PAPER") {
			return "PLAYER WIN";
		} else if (computer == "ROCK") {
			return "COMPUTER WIN";
		}
	}
}

function game(player) {
	const computer = computerPlay();
	const result = playRound(player, computer);

	if (result == "PLAYER WIN") {
		playerScore += 1;
	} else if (result == "COMPUTER WIN") {
		computerScore += 1;
	}

	updateMessage(player, computer, result);
	updateMove(player, computer);
	updateScore();

	if (playerScore == numberOfGames || computerScore == numberOfGames) {
		endGame(result);
	}
}
