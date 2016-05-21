exports.up = knex => knex.schema.createTable('transactions', t => {
  t.uuid('id').primary();
  t.uuid('participantId').references('id').inTable('participants').notNull();
  t.decimal('amount', 18, 2);
  t.timestamp('createdAt').defaultTo(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable('transactions');
