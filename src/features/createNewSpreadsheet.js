// Imports
const XLSX = require("xlsx");
const { rl } = require("../modules/readline.js");
const { getTitleName } = require("../functions/readline.getTitleName.js");
const { getArchiveName } = require("../functions/readline.getArchiveName.js");
const { saveInfoToJSON } = require("../modules/saveInfoToJson.js");

// Process Data (add a new row)
async function main() {
	const title = await getTitleName();
	const archiveName = await getArchiveName();
	const arrayOfArraysData = [title.split(" ").map((word) => [word])];
	const worksheet = XLSX.utils.aoa_to_sheet(arrayOfArraysData);
	const workbook = XLSX.utils.book_new();
	XLSX.utils.book_append_sheet(workbook, worksheet);

	console.table(worksheet);
	rl.close();
	XLSX.writeFile(workbook, archiveName + ".xlsx");

	return { title, archiveName };
}

// run the aplication
async function run() {
	// call the main function and get title and archiveName
	const { title, archiveName } = await main();
	await saveInfoToJSON(title, archiveName);
}

run();
