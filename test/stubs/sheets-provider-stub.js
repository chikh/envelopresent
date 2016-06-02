const path = require('path');
const cellsStubData =
  require(path.join(__dirname, '..', 'data', 'sheet-cells'));

module.exports = {
  cells: () => new Promise(resolve => resolve(cellsStubData))
};
