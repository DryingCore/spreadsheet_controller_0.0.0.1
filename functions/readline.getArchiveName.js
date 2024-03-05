const { rl } = require("../src/modules/readline.js");

// Ask to the user to give a name for the spreadsheet
function getArchiveName() {
	return new Promise((resolve) => {
		rl.question("Define a archive name: ", (archiveName) => {
			resolve(archiveName);
		});
	});
}

module.exports = { getArchiveName };
