const { runInterface } = require("./src/features/interface.js");
const { logicChoice } = require("./src/functions/callTheRightFunction");

async function runAplication() {
	runInterface;
	await logicChoice();
}

runAplication();
