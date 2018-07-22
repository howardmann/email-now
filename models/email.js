let knex = require('../db/knex.js')

let Email = module.exports = {}

Email.find = () =>
  knex('emails').select()

Email.findBy = (property, name) =>
  knex('emails').where(property, name)

Email.create = (body) =>
  knex('emails').insert(body).returning('*').then(result => result[0])