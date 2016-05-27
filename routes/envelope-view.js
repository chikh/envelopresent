module.exports = (googleSheetsProvider) => {
  const router = require('express').Router();

  const googleSheetInfo = {
    email: process.env.GOOGLE_EMAIL,
    privateKey: process.env.GOOGLE_PRIVATE_KEY,
    googleSheetKey: process.env.GOOGLE_SHEET_ID
  };

  const googleSheet = googleSheetsProvider(googleSheetInfo);

  router.get('/', (req, res) => {
    googleSheet.sheets
      .then(sheets => res.send(sheets[1]))
      .catch(e => res.error(e));
  });

  return router;
};
