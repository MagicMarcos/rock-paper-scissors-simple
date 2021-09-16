// define bot score and player score for tracking
let botScore = 0,
	playerScore = 0;

// !sets functions for dom buttons
// goes into our HTML document -> finds elements with a certain iD -> listens for a click event
// on click event calls a specific function that sets off the game
document.getElementById('rock').onclick = playerThrowsRock;
document.getElementById('scissors').onclick = playerThrowsScissors;
document.getElementById('paper').onclick = playerThrowsPaper;

// !player choice functions
function playerThrowsRock() {
	// creates variable that stores our random weapon function
	let botsWeapon = getRandomWeapon();
	// call check who won function passing in botweapon and player choice as arguments
	checkWhoWon(botsWeapon, 'rock');
	console.log('rock');
}

// same as above function but for different player choices
function playerThrowsScissors() {
	let botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon, 'scissors');
	console.log('scissors');
}

// same as above function but for different player choices
function playerThrowsPaper() {
	let botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon, 'paper');
	console.log('paper');
}
// !random bot choice function
function getRandomWeapon() {
	// define random number to contain result of math.random => returns a number between 0 and 1
	let randomNumber = Math.random();

	// sets default bot weapon to rock -- that way we don't need to add a specific conditional for "rock"
	// so long as the conditionals below are false, then this will remain the default choice
	let botsWeapon = 'rock';
	console.log('botRock');

	// conditional reassigns bots weapon based on result from random number expression
	if (randomNumber < 0.33) {
		botsWeapon = 'scissors';
		console.log('botScissors');
	} else if (randomNumber < 0.6666) {
		botsWeapon = 'paper';
		console.log('botPaper');
	}
	return botsWeapon;
}

// ! determines the winner
function checkWhoWon(botsWeapon, playersWeapon) {
	// conditional compares result from get random weapon function to players choice
	// parameters are determined from arguments passed in inside the playerThrowsRock function -- where we called the checkWhoWon function
	if (botsWeapon == playersWeapon) {
		// calls function that displays message on the dom with tie message
		displayCompleteMessage('There was tie. Try harder.');
	} else if (
		(botsWeapon == 'scissors' && playersWeapon == 'paper') ||
		(botsWeapon == 'paper' && playersWeapon == 'rock') ||
		(botsWeapon == 'rock' && playersWeapon == 'scissors')
	) {
		// if conditional above evaluates to true then bot wins and we call function that increases bot score by changing the dom
		increaseBotScore();
	} else {
		// if none of the conditionals above evaluate to true, then we call this function
		// increases player score by one
		increasePlayerScore();
	}
}

// increases bot score by one -- is called by the check who won function if certain conditions evaluate to true
function increaseBotScore() {
	// updates botScore
	botScore += 1;

	//go into our document -> find element with id of computer score -> change it's inner html to the updated botscore
	document.getElementById('computerScore').innerHTML = botScore;

	// calls the display function with a loser message as an argument
	displayCompleteMessage('You Loser! The bots won!');
}

// same as above but for human score -- if player wins -> is called by the check who won function
function increasePlayerScore() {
	playerScore += 1;
	document.getElementById('humanScore').innerHTML = playerScore;
	displayCompleteMessage('You Saved Us!');
}

// displays a message according to who wins the game
// called by the increase player score, increase botscore or check won won functions
function displayCompleteMessage(msg) {
	// goes into the document, selects an element with status id -> changes inner html to argument passed in as our msg parameter
	document.getElementById('status').innerHTML = msg;
}
