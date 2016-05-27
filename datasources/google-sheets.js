module.exports = ({
  googleSheetKey,
  email,
  privateKey
}) => {
  const GoogleSpreadsheet = require('google-spreadsheet');

  const doc = new GoogleSpreadsheet(googleSheetKey);

  const authorize = new Promise((resolve, reject) =>
    doc.useServiceAccountAuth({
      client_email: email,
      private_key: privateKey
    }, (err, res) => err ? reject(err) : resolve(res))
  );

  const sheetInfo = authorize.then(() =>
    new Promise((resolve, reject) => doc.getInfo((err, info) =>
      err ? reject(err) : resolve(info)
    )));

  const sheets = sheetInfo.then(i => i.worksheets);

  return {
    sheetInfo,
    sheets
  };
};
