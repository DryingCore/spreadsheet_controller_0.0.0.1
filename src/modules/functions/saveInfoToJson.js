// modules/functions/saveInfoToJSON.js
const fs = require("fs").promises;

async function saveInfoToJSON(title, archiveName) {
	try {
		// Data to save
		const data = { title, spreadsheetName: archiveName };

		// Converting to JSON
		const dataToJSON = JSON.stringify(data, null, 2);

		// Writing to a JSON file
		await fs.writeFile("spreadsheetInfo.json", dataToJSON);

		console.log("Data saved with success!");
	} catch (err) {
		console.log(`Error. ${err}`);
	}
}

module.exports = { saveInfoToJSON };
