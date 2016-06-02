module.exports = (sheetDataMiner) => {
  const router = require('express').Router();

  router.get('/', (req, res) => {
    sheetDataMiner.calculateSum()
      .then(sum => res.send('Сумма: ' + sum))
      .catch(e => res.error(e));
  });

  return router;
};
