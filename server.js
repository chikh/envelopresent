const path = require('path');
const express = require('express');
const app = express();

const envelopeRoute = require(path.join(__dirname, 'routes', 'envelope-view'));

const googleSheetInfo = {
  email: process.env.GOOGLE_EMAIL,
  privateKey: process.env.GOOGLE_PRIVATE_KEY,
  googleSheetKey: process.env.GOOGLE_SHEET_ID
};

const googleSheetsProvider =
  require(path.join(__dirname, 'datasources', 'google-sheets'))(
    googleSheetInfo);
const sheetDataMiner =
  require(path.join(__dirname, 'services', 'sheet-data-miner'))(
    googleSheetsProvider);

app.use('/envelope', envelopeRoute(sheetDataMiner));

app.get('/', (req, res) => {
  res.redirect('/envelope');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.info(`Server listening on port ${port}`);
});
