module.exports = (sheet) => {
  return new Promise((resolve, reject) =>
    sheet.getCells(
      { 'min-row': 2, 'max-row': 20, 'min-col': 2, 'max-col': 2 },
      (err, res) => err ? reject(err) : resolve(res)
    )).then(cells =>
      cells.map(c => c.numericValue)
      .reduce((sum, value) => sum + value, 0)
    );
};
