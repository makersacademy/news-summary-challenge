colors = {
  red : "\x1b[31m",
  white: "\x1b[37m",
  green: "\x1b[32m"
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
        logFail(`Expected ${ValueB}, but got ${valueA}`)
      }
    },
    toInclude: function (valueB) {
      if (valueA.includes(valueB)) {
        logSuccess("Pass")
      } else {
        logFail(`Expected ${valueA} to include ${valueB}`)
      }
    }
  })
} 

exports.expect = expect