const maxRows = 100;

module.exports = (googleSheetsProvider) => ({
  calculateSum: () => googleSheetsProvider.cells({
    sheet: 1, minRow: 2, maxRow: 2 + maxRows, minCol: 2, maxCol: 2
  }).then(cells => cells
    .filter(c => c.numericValue)
    .map(c => c.numericValue).reduce((sum, value) => sum + value, 0)
  )
});
