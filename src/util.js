let util = module.exports = {}

// Dependencies
let _ = require('lodash')

// FP helpers
util.sideEffect = fn => d => {
  fn(d)
  return d
}

util.validator = (errorCode, fn) => {
  let fnClone = (...args) => fn.apply(fn, args)
  fnClone.errorCode = errorCode
  return fnClone
}

util.notBlank = (d) => _.isString(d) && d.length > 0

util.emailRegex = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

util.mobileRegex = (string) => {
  let re = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  return re.test(String(string));
}
