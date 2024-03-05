const XLSX = require("xlsx");
const { getFileName } = require("../functions/readline.getFileToEdit");

// Async function to read the spreadsheet file
async function readSpreadSheet() {
	const fileToEdit = await getFileName();
	const workbook = XLSX.readFile(fileToEdit + ".xlsx");
	console.log(workbook);
}

readSpreadSheet();
