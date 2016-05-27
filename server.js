const path = require('path');
const express = require('express');
const app = express();

const envelopeRoute = require(path.join(__dirname, 'routes', 'envelope-view'));

const googleSheetsProvider =
  require(path.join(__dirname, 'datasources', 'google-sheets'));

app.use('/envelope', envelopeRoute(googleSheetsProvider));

app.get('/', (req, res) => {
  res.redirect('/envelope');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.info(`Server listening on port ${port}`);
});
