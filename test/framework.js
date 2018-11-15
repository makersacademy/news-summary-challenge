(function(exports) {
  function describe(description, func) {
    console.log(description)
    func()
  }

  function it(description, func) {
    describe(" # " + description, func)
  }

  function expect(arg) {
    return matchers(arg)
  }

  function matchers(arg) {
    var pass = '   %cP'
    var passColour = 'color: green'
    var fail = '   %cF'
    var failColour = 'color: red'

    return {
      toBeTruthy: function() {
        if (!!arg) {
          console.log(pass, passColour)
        } else {
          console.log(fail, failColour)
          throw new Error(`Assertion failed: ${arg} is not truthy`)
        }
      },
      isEqualTo: function(argTwo) {
        if (arg === argTwo) {
          console.log(pass, passColour)
        } else {
          console.log(fail, failColour)
          throw new Error(`Assertion failed: ${arg} does not equal ${argTwo}`)
        }
      },
      isInstanceOf: function(argTwo) {
        if (arg instanceof argTwo) {
          console.log(pass, passColour)
        } else {
          console.log(fail, failColour)
          throw new Error(`Assertion failed: ${arg} is not an instance of ${argTwo}`)
        }
      },
      includes: function(argTwo) {
        if (arg.includes(argTwo)) {
          console.log(pass, passColour)
        } else {
          console.log(fail, failColour)
          throw new Error(`Assertion failed: ${arg} does not include ${argTwo}`)
        }
      },
    }
  }

  exports.describe = describe
  exports.it = it
  exports.expect = expect
})(this)
