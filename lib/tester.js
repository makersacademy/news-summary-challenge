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

var expect = function(valueA) {
  return({
    toEqual: function (ValueB) {
      if (valueA == ValueB) {
        logSuccess("Test Passed")
      } else {
        logFail(`${colors.white}EXPECTED${colors.red} ${ValueB}, ${colors.white}BUT GOT ${colors.red}${valueA}`)
      }
    },
    toInclude: function (valueB) {
      if (valueA.includes(valueB)) {
        logSuccess("Pass")
      } else {
        logFail(`${colors.white}EXPECTED${colors.red} ${valueA} ${colors.white}to include ${colors.red}${valueB}`)
      }
    }
  })
}
const describe = function(message, scenario) {
  console.log(message)
  scenario()
}

const scenario = function(message, fn) {
  console.log(colors.yellow, message, colors.white)
  try {
    fn()
  } catch (error) {
    logFail(`${error.message}`)
  }
  console.log("")
}

exports.describe = describe
exports.expect = expect
exports.scenario = scenario