const { rl } = require("../modules/readline");

// This function gets the option that the user wants
function askUserWhatToDo() {
	const options = {
		1: "(Press 1) - To create a new SpreadSheet",
		2: "(Press 2) - To Edit a SpreadSheet",
	};

	return new Promise((resolve) => {
		console.log("Welcome!");
		rl.question(`What do you want to do?\n${options[1]}\n${options[2]}\n-----------------------------------------\n`, (option) => {
			resolve(option);
			rl.close();
		});
	});
}

module.exports = { askUserWhatToDo };
