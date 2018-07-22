let emailHelper = module.exports = {}

// Dependencies
let {processEmail} = require('./processEmail')
let {validPayload,highlightErrors} = require('./validation')

emailHelper.processEmail = processEmail
emailHelper.validPayload = validPayload
emailHelper.highlightErrors = highlightErrors