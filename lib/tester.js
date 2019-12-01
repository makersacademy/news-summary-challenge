colors = {
  red : "\x1b[31m",
  white: "\x1b[37m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m"
}

function logFail(message) {
  console.log(colors.red, message, colors.white)
}

function logSuccess(message) {
  console.log(colors.green, message, colors.white)
}

var expect = function(actual) {
  return({
    toEqual: function (expectation) {
      if (actual == expectation) {
        logSuccess("Test Passed")
      } else {
        logFail(`${colors.white}EXPECTED${colors.red} ${expectation}, ${colors.white}BUT GOT ${colors.red}${actual}`)
      }
    },
    toInclude: function (expectation) {
      if (actual.includes(expectation)) {
        logSuccess("Pass")
      } else {
        logFail(`${colors.white}EXPECTED${colors.red} ${actual} ${colors.white}to include ${colors.red}${expectation}`)
      }
    }
  })
}
const describe = function(message, fn) {
  indent = "  "
  console.log(indent, message)
  fn()
}

const context = function(message, fn) {
  console.log(colors.blue, "Context: ", message, colors.white)
  fn()
}

const it = function(message, fn) {
  indent = "  "
  console.log(colors.yellow, message, colors.white)
  try {
    fn()
  } catch (error) {
    logFail(`${indent * 2}${error.message}`)
  }
  console.log("")
}

// exports.describe = describe
// exports.context = context
// exports.expect = expect
// exports.it = it