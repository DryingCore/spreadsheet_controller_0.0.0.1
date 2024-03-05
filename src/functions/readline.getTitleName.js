const { rl } = require("../modules/readline.js");

// Ask to the user to add titles for the spreadsheet
function getTitleName() {
	return new Promise((resolve) => {
		rl.question("Define a title: ", (title) => {
			resolve(title);
		});
	});
}

module.exports = { getTitleName };
