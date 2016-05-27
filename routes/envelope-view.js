module.exports = (googleSheetsProvider) => {
  const router = require('express').Router;

  const googleSheetInfo = {
    email: process.env.GOOGLE_EMAIL,
    privateKey: process.env.GOOGLE_PRIVATE_KEY,
    googleSheetKey: process.env.GOOGLE_SHEET_ID
  };

  const googleSheet = googleSheetsProvider(googleSheetInfo);

  router.route('/envelope')
    .get('/', (req, res) => {
      googleSheet
        .then(s => res.send(s.sheets[1]))
        .catch(e => res.console.error(e));
    });
};
