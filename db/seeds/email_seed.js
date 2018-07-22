let knex = require('../knex.js')
let sql = knex.raw
exports.seed = async function (knex, Promise) {
  // ===Emails
  // Clear out DB
  await sql('DELETE FROM Emails')
  // Reset id number
  await sql('ALTER SEQUENCE emails_id_seq RESTART WITH 1')
  // Seed new data
  await sql(`
    INSERT INTO Emails (name, email, phone) VALUES
    ('howie', 'howie@email.com', '0412019110'),
    ('bob', 'bob@email.com', '0422219110'),
    ('jane', 'jane@email.com', '0433319110')
  `)
}