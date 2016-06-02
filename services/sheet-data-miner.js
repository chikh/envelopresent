const _ = require('lodash');

const maxRows = 100;

module.exports = (googleSheetsProvider) => ({
  calculateSum: () => googleSheetsProvider.cells({
    sheetNumber: 1, minRow: 2, maxRow: 2 + maxRows, minCol: 2, maxCol: 2
  }).then(cells => cells
    .filter(c => c.numericValue)
    .map(c => c.numericValue).reduce((sum, value) => sum + value, 0)
  ),

  handedOverList: () => googleSheetsProvider.cells({
    sheetNumber: 1, minRow: 2, maxRow: 2 + maxRows, minCol: 2, maxCol: 3
  }).then(cells =>
    _.values(_.pickBy(
      _.groupBy(cells, 'row'),
      cells => _.find(cells, c => c.numericValue)
    )).map(cells => cells.find(c => !c.numericValue).value).sort()
  )
});
