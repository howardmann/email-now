// Dependencies
let chai = require('chai');
let expect = chai.expect;

// Modules and test data
let {
  validPayload,
  highlightErrors
} = require('../src/email.js')

describe('#email', () => {
  describe('.validPayload', () => {
    it('should return true if all params are valid', () => {
      let payload = {
        email: 'howie@email.com',
        name: 'howie',
        phone: '0412038110'
      }
      let input = validPayload(payload)
      let actual = true
      expect(input).to.eql(actual)
    })
    it('should return false if one or more param fails validation', () => {
      let payload = {
        name: 'howie',
        phone: 000
      }
      let input = validPayload(payload)
      let actual = false
      expect(input).to.eql(actual)

    })
  })
  describe('.highlightErrors', () => {
    it('should return payload with errors highlighted errors if any params are invalid', () => {
      let payload = {
        name: 'howie',
        phone: 000
      }
      let input = highlightErrors(payload)
      let actual = {
        email: 'Must be valid email',
        name: 'howie',
        phone: 'Must be valid mobile number'
      }
      expect(input).to.eql(actual)
    })
    it('should return same payload if no errors', () => {
      let payload = {
        email: 'howie@email.com',
        name: 'howie',
        phone: '0412038110'
      }
      let input = highlightErrors(payload)
      let actual = payload
      expect(input).to.eql(actual)

    })
  })
})
