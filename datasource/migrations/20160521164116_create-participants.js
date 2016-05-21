exports.up = knex => knex.schema.createTable('participants', t => {
  t.uuid('id').primary();
  t.string('name').notNull();
});

exports.down = knex => knex.schema.dropTable('participants');
