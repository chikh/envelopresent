const path = require('path');
const express = require('express');
const app = express();

const knexDatasource =
  require(path.join(__dirname, 'datasource', 'knex-pg-provider'))();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = process.env.PORT || 3000;

knexDatasource.migrate.latest().then(() => {
  app.listen(port, () => {
    console.info(`Server listening on port ${port}`);
  });
});
