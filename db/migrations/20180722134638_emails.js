
exports.up = function(knex, Promise) {
  return knex.raw(`
    CREATE TABLE Emails (
      id serial PRIMARY KEY,
      name varchar(255),
      email varchar(255),
      phone int
    );
  `)
};

exports.down = function(knex, Promise) {
  return knex.raw(`
    DROP TABLE Emails;
  `)
};
