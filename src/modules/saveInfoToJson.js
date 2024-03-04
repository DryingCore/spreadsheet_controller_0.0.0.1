// modules/functions/saveInfoToJSON.js
const fs = require("fs").promises;
const path = require("path");

async function saveInfoToJSON(title, archiveName) {
	try {
		// defines the output folder for the .json files
		const defaultPath = path.join(__dirname, "../../");
		const defaultFolder = path.join("spreadsheets", '/json');
		const completePath = path.join(defaultPath, defaultFolder);

		// Data to save
		const data = { title, spreadsheetName: archiveName };

		// Converting to JSON
		const dataToJSON = JSON.stringify(data, null, 2);

		// Writing to a JSON file
		await fs.writeFile(path.join(completePath, archiveName + "_inf.json"), dataToJSON);

		console.log("Data saved with success!");
	} catch (err) {
		console.error(`Error: ${err.message}`);
	}
}

module.exports = { saveInfoToJSON };
