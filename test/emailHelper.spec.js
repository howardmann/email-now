// Dependencies
let chai = require('chai');
let expect = chai.expect;

// Modules and test data
let {
  makeProcessEmail
} = require('../src/emailHelper/processEmail')

let {
  validPayload,
  highlightErrors
} = require('../src/emailHelper')


describe('#email', () => {
  describe('.processEmail', () => {
    // Stub for Email model
    let EmailStub = {
      create: (payload) => Promise.resolve(payload)
    }
    let processEmail = makeProcessEmail(EmailStub)

    it('should return payload with success message if valid', async () => {
      let payload = {
        email: 'howie@email.com',
        name: 'howie',
        phone: '0412038110'
      }
      let actual = {
        status: 'ok',
        payload
      }
      let input = await processEmail(payload)
      expect(input).to.eql(actual)
    })
    it('should return payload with validation errors if payload invalid', async () => {
      let payload = {
        name: 42,
        phone: '0412038110'
      }
      let actual = {
        status: 'validation error',
        payload: {
          name: 'Name must be string and not blank',
          email: 'Must be valid email',
          phone: '0412038110'
        }
      }
      let input = await processEmail(payload)
      expect(input).to.eql(actual)

    })
  })
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
        status: 'validation error',
        payload: {
          email: 'Must be valid email',
          name: 'howie',
          phone: 'Must be valid mobile number'
        }
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
