const { interfaceChoice } = require("../features/interface.js");
const { run } = require("../features/createNewSpreadsheet.js");

async function logicChoice() {
	switch (await interfaceChoice) {
		case "1":
			console.log("Running Script 'create New Spreadsheet");
			run();
			break;
	}
}

logicChoice();

module.exports = { logicChoice };
