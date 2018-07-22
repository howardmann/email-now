let emails = module.exports = {}

// Dependencies
let Email = require('../models/email') // email model
let {validPayload,highlightErrors} = require('../src/email.js') // validation helpers
let R = require('ramda') // fp library

emails.show = (req, res, next) => {
  let email = req.params.email
  Email.findBy('email', email)
    .then(resp => res.json(resp))
    .catch(next)
}


emails.create = (req, res, next) => {
  let payload = req.body
  if (validPayload(payload)) {
    return Email.create(payload)
      .then(resp => {
        console.log('miaow', resp);
        res.json({
          status: 'success',
          payload
        })
      })
      .catch(next)
  } else {
    return res.json(highlightErrors(payload))
  }
}
