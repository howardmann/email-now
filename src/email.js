// Dependencies
let R = require('ramda')
let {validator, notBlank, emailRegex, mobileRegex} = require('./util.js')

let nameValidator = validator('Name must be string and not blank', notBlank)
let emailValidator = validator('Must be valid email', emailRegex)
let phoneValidator = validator('Must be valid mobile number', mobileRegex)

let payloadValidator = ({email, name, phone}) => 
  [emailValidator(email), nameValidator(name), phoneValidator(phone)]

let validPayload = R.pipe(
  payloadValidator,
  R.all(R.equals(true))
)

let checkValidator = (validator, d) =>
  validator(d) ? d : validator.errorCode

let highlightErrors = ({email,name,phone}) => ({
  email: checkValidator(emailValidator, email),
  name: checkValidator(nameValidator, name),
  phone: checkValidator(phoneValidator, phone)
})

module.exports = {
  validPayload,
  highlightErrors
}
