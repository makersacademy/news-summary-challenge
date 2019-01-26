'use strict'

const describe = (description, fn) => {
  console.log(description)
  fn()
}

const it = (message, fn) => describe('  ' + message, fn)

const expect = (expected) => matchers(expected)

const matchers = (expected) => ({
  toEqual: (actual) => {
    if (expected === actual) {
      console.log(`%c  ${expected} is equal to ${actual}`, 'color: limegreen')
      return true
    } else {
      console.log(`%c  ${expected} is not equal to ${actual}`, 'color: red')
      return false
    }
  },

  toContain: (actual) => {
    if (expected.includes(actual)) {
      console.log(`%c  ${expected} includes ${actual}`, 'color: limegreen')
      return true
    } else {
      console.log(`%c  ${expected} includes ${actual}`, 'color: red')
      return false
    }
  },

  toThrowError: (error) => {
    try {
      expected()
    } catch (err) {
      var caughtErrorText = err.toString()
    } finally {
      var errorText = 'Error: ' + error
      if (errorText === caughtErrorText) {
        console.log(`%c  "${caughtErrorText}" has been thrown!`, 'color: limegreen')
      } else {
        console.log(`%c  "${caughtErrorText}" has not been thrown even though it should have been.`, 'color: red')
      }
    }
  }
})
