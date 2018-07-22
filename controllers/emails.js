let emails = module.exports = {}

// Dependencies
let Email = require('../models/email') // email model
let {processEmail} = require('../src/email/index') // processEmail

emails.show = (req, res, next) => {
  let email = req.params.email
  Email.findBy('email', email)
    .then(resp => res.json(resp))
    .catch(next)
}

emails.create = async (req, res, next) => {
  let payload = req.body
  let result = await processEmail(payload)
  res.json(result)
}

