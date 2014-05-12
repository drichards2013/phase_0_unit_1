// I worked [by myself, with:] on this challenge

// Your mission description:
// I want to have humans. They'll have power levels. They'll fight goblins that have power levels too. 
// If the power level of the human is greater than that of the goblin, then the human wins, else otherwise.
// 

// Pseudocode
// make human 
// set power level attribute to a random number
// make goblin 
// set power level attribute to a random number
// create fight function that accepts a human and a goblin
// return winner

// Initial Code

var human = {power_level: Math.random()};
var goblin = {power_level: Math.random()};

var fight = function(human, goblin) {
	if(human.power_level > goblin.power_level) {
		return 'The human has won.';
	} else if(goblin.power_level > human.power_level) {
		return 'The goblin has won.';
	} else { "There's been a tie. Pretty rare.";

	}

// Refactored Code


var fight = function(human, goblin) {

	var human = {power_level: Math.random()};
	var goblin = {power_level: Math.random()};

	if(human.power_level > goblin.power_level) {
		return 'The human has won.';
	} else if(goblin.power_level > human.power_level) {
		return 'The goblin has won.';
	} else { "There's been a tie. Pretty rare.";

	}
}


// Reflection
// I think we should place the instantiation of human and goblin inside the function. 
// Or... We could get rid of the function completely! Or not... Because we'd have to rewrite it every time we have
// a different goblin or human. But yeah, I think we should put the human and goblin variables inside the function.
// 
// I tend to find languages other than Ruby to be annoying, since Ruby makes things so simple (e.g. no parentheses, etc.),
// so it wasn't particularly fun. 
// 
// 