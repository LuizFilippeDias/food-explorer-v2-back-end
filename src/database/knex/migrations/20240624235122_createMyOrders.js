exports.up = function (knex) {
  return knex.schema.createTable('myOrders', function (table) {
      table.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
      table.integer('dish_id').references('id').inTable('dishes').onDelete('CASCADE');
      table.unique(['user_id', 'dish_id']);

    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('myOrders');
};
