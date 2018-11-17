const chalk = require('chalk')
const fs = require('fs')

SweetSuite = function () {

  const fail = function(expression, assertion) {
    sweetieBar('🌚')
    console.log(chalk.red('In: ' + __filename))
    return false
  }

  const pass = function() {
    sweetieBar('🍬')
    return true
  }

  var sweetieBar = function(result) {
    fs.appendFile('sweets.txt', result + ' ', function(){})
  }

  var testLog = function(test) {
    fs.appendFile('wrappers.txt', test + '🍠', function(){} )
  }

  exports: mock = (object) => ({
    with: function(call) {
      return call
    }
  })

exports: stub = (object) => mock(object)

exports: matchers = (expression) => ({
  toEqual: function(assertion) {
    if (expression !== assertion) {
      console.trace(
        chalk.red("🌚 " + expression + " isn't " + assertion)
      )
      return fail()
    } else {
      return pass()
    }
  },
  toInclude: function(assertion) {
    if (!expression.includes(assertion)) {
      console.trace(
        chalk.red("🌚 " + expression + " does not include " + assertion)
      )
      return fail()
    } else {
      return pass()
    }
  },
  isInstanceOf: function(assertion) {
    if (!(expression instanceof assertion)) {
      console.trace(
        chalk.red("🌚 " + expression + " is not an instance of " + assertion)
      )
      return fail()
    } else {
      return pass()
    }
  },
  toBeGreaterThan: function(assertion) {
    if(!(expression > assertion)) {
      console.trace(
        chalk.red("🌚 " + expression + " is not greater than " + assertion)
      )
      return fail()
    } else {
      return pass()
    }
  },
  toBeLessThan: function(assertion) {
    if(!(expression < assertion)) {
      console.trace(
        chalk.red("🌚 " + expression + " is not less than " + assertion)
      )
      return fail()
    } else {
      return pass()
    }
  }
  })

exports: expect = (expression) => matchers(expression)

exports: allow = (expression) => matchers(expression)

exports: method = (name, expectations) => {
  expectations()
  }

exports: represent = (name, expectations) => method(
  chalk.bold(name), expectations
)
exports: describe = (name, expectations) => method(
  chalk.bold(name), expectations
)

exports: it = (can, doThis) => {
  testLog(can, doThis)
  doThis()
}

}
new SweetSuite()
