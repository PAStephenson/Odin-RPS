// User Interface variables
const btnAttack = document.querySelector('#attack');
const btnDisarm = document.querySelector('#disarm');
const btnBlock = document.querySelector('#block');
const winnerMessage = document.querySelector('#winnerMessage');
const moveMessage = document.querySelector('#moveMessage');
const playerMove = document.querySelector('#playerMove');
const computerMove = document.querySelector('#computerMove');
const playerTotal = document.querySelector('#playerTotal');
const computerTotal = document.querySelector('#computerTotal');

btnAttack.addEventListener('click', () => {game('ATTACK')});
btnDisarm.addEventListener('click', () => {game('DISARM')});
btnBlock.addEventListener('click', () => {game('BLOCK')});

// Model overall winner message variables
const modelContainer = document.querySelector('#modelContainer');
const modelMessage = document.querySelector('#modelMessage');
const btnModel = document.querySelector('#btnModel');

btnModel.addEventListener('click', () => {resetGame()});

// Game variables
let playerScore = 0;
let computerScore = 0;
const numberOfGames = 5;

function updateMove(player, computer) {
	switch (player) {
		case 'ATTACK':
			playerMove.textContent = '⚡️';
			break;
		case 'DISARM':
			playerMove.textContent = '🌀';
			break;
		case 'BLOCK':
			playerMove.textContent = '💠';
			break;
	}

	switch (computer) {
		case 'ATTACK':
			computerMove.textContent = '⚡️';
			break;
		case 'DISARM':
			computerMove.textContent = '🌀';
			break;
		case 'BLOCK':
			computerMove.textContent = '💠';
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
		winnerMessage.textContent = 'You lose!'
		// Puts computer move into title case (first letter capital, rest lower)
		computerTitle = computer.charAt(0) + computer.slice(1).toLowerCase();
		moveMessage.textContent = `${computerTitle} beats ${player.toLowerCase()}`
	}
}

function endGame(result) {
	modelContainer.classList.add('show');   

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
	modelContainer.classList.remove('show'); 

	playerScore = 0;
	computerScore = 0;
	updateScore();

	playerMove.textContent = '?';
	computerMove.textContent = '?';
	winnerMessage.textContent = "Choose Your Spell";
	message.textContent = 'Who will strike first?';
}

function computerPlay() {
	const moves = ["ATTACK", "DISARM", "BLOCK"];
	const move = Math.floor(Math.random() * moves.length);
	return moves[move];
}

function playRound(player, computer) {
	if (player == computer) {
		return "DRAW";
	} else if (player == "ATTACK") {
		if (computer == "DISARM") {
			return "PLAYER WIN";
		} else if (computer == "BLOCK") {
			return "COMPUTER WIN";
		}
	} else if (player == "DISARM") {
		if (computer == "BLOCK") {
			return "PLAYER WIN";
		} else if (computer == "ATTACK") {
			return "COMPUTER WIN";
		}
	} else if (player == "BLOCK") {
		if (computer == "ATTACK") {
			return "PLAYER WIN";
		} else if (computer == "DISARM") {
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
