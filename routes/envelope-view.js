module.exports = (googleSheetsProvider, calculator) => {
  const router = require('express').Router();

  const googleSheetInfo = {
    email: process.env.GOOGLE_EMAIL,
    privateKey: process.env.GOOGLE_PRIVATE_KEY,
    googleSheetKey: process.env.GOOGLE_SHEET_ID
  };

  const googleSheet = googleSheetsProvider(googleSheetInfo);

  router.get('/', (req, res) => {
    googleSheet.sheets
      .then(sheets => calculator(sheets[1])
      .then(sum => res.send('Сумма: ' + sum)))
      .catch(e => res.error(e));
  });

  return router;
};
