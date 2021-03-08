var game = {
	win: '0',
	loss: '0'
};

// var choices = ["rock", "paper", & "scissors"];
// the "&" symbol is an illegal character here we don't have to have an & right before the end of our array just simply commas to separate each element of the array, checkout the example below
const choices = ['rock', 'paper', 'scissors'];

// we want to generate random numbers as opposed to hard coding them to 0 & 1. We can do this by combining a few Math object methods, more specifically Math.floor() and Math.random()
// var random1 = 0;
// var random2 = 1;
const random1 = Math.floor(Math.random() * 3);
const random2 = Math.floor(Math.random() * 3);

// great work!
var bot1 = choices[random1];
var bot2 = choices[random2];

// close you were moving in the right direction, but let take account of where our app is right now. We have an array of choices ['rock', 'paper', 'scissors'], we can access each element with indexes (0 - 2), e.g. choices[1] === 'paper'. Below that random1 & random2 generate a random number between 0 and 2, therefore when we go to create bot1 and bot2 the options would be choices[(some number between 0 - 2, which would correlate to one of the indexes of our array)] therefore bot1 & bot2 should be a random selection of either rock, paper, or scissors. One of the problems with this if/elseif/else block is the greeting as we never defined a greeting var. What we could do is write and if else statement that determines what bot1 chose and then in a nested if stmt check what bot2 chose. If we know what bot1 and bot2 chose we know who won the game. e.g. if bot1 chose "rock" and bot2 chose "scissors" bot1 would have won the game. Checkout the example below.

// if (bot2 > 0) {
// 	greeting = 'Congratulations! Bot2 wins';
// } else if (bot1 < 0) {
// 	greeting = 'Congratulations! Bot1 wins';
// } else {
// 	greeting;
// }

if (bot1 === 'rock') {
	// we need to determine what bot2 picked to determine a winner
	if (bot2 === 'scissors') {
		game.win++; // game is played from bot1's perspective therefore this is a win.
	} else if (bot2 === 'paper') {
		game.loss++;
	}
	// we don't need to do anything for a draw as we wouldn't increment either win or loss in this instance. If we were tracking ties then we would need an else || else if for that
} else if (bot1 === 'paper') {
	if (bot2 === 'rock') {
		game.win++;
	} else if (bot2 === 'scissors') {
		game.loss++;
	}
} else {
	// we don't need an else if to check for "scissors" b/c if bot1 isn't rock or paper it must be scissors
	if (bot2 === 'paper') {
		game.win++;
	} else if (bot2 === 'rock') {
		game.loss++;
	}
}

// console.log(game); // checkout our game object now after the if block is complete

var results = '';

if (game.win > 0) {
	results += bot1 + ' beats ' + bot2;
	// results += `${bot1} beats ${bot2}`; // alternate syntax
} else if (game.loss > 0) {
	results += bot2 + ' beats ' + bot1;
} else {
	results += 'Tie game';
}

console.log(results); // checkout our resulting string
