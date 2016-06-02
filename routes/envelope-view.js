module.exports = (sheetDataMiner) => {
  const router = require('express').Router();

  router.get('/', (req, res) => {
    Promise.all(
      [sheetDataMiner.calculateSum(), sheetDataMiner.handedOverList()]
    ).then(([sum, handedOver]) =>
      res.send(
        'Сдали: ' + handedOver.join(', ') + '<br>' +
        'Сумма: ' + sum
      )
    ).catch(e => res.error(e));
  });

  return router;
};
