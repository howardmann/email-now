// Dependencies
let R = require('ramda') // fp library
let {validPayload,highlightErrors} = require('./validation') //validation helper
let Email = require('../../models/email') // email model
let {sideEffect} = require('../util') // handrolled fp helpers

let postEmail = (payload, model) =>
  model.create(payload)
    .then(sideEffect(o => console.log(`Created: ${o.name}`)))
    .then(o => ({payload: o}))
    .then(R.merge({status: 'ok'}))

// Inject the model for unit testing purposes
let makeProcessEmail = (model) => 
  R.ifElse(
    validPayload,
    R.partialRight(postEmail, [model]),
    highlightErrors
  )

// Expose API prefilled with model for usage purposes
let processEmail = makeProcessEmail(Email)

module.exports = {processEmail, makeProcessEmail}