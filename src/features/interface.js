const { askUserWhatToDo } = require("../functions/readline.interface.js");

// call interface readline to get option
async function runInterface() {
	const interfaceChoice = await askUserWhatToDo();
	module.exports = { interfaceChoice, runInterface };
	return interfaceChoice;
}

runInterface();
