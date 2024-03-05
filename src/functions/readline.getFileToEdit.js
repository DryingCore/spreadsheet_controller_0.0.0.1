const { rl } = require("../modules/readline.js");

// Ask the name of the file edit
function getFileName() {
	return new Promise((resolve) => {
		rl.question("What's the archive title?", (fileToEdit) => {
			resolve(fileToEdit);
			rl.close();
		});
	});
}

module.exports = { getFileName };
