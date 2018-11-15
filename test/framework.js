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
    return {
      isEqualTo: function(argTwo) {
        if (arg !== argTwo) {
          console.log('   %cF', 'color:red')
          throw new Error(`Assertion failed: ${arg} does not equal ${argTwo}`)
        } else {
          console.log('   %cP', 'color:green')
        }
      },
      isInstanceOf: function(argTwo) {
        if (arg instanceof argTwo) {
          console.log('   %cP', 'color:green')
        } else {
          console.log('   %cF', 'color:red')
          throw new Error(`Assertion failed: ${arg} is not an instance of ${argTwo}`)
        }
      },
      includes: function(argTwo) {
        if (arg.includes(argTwo)) {
          console.log('   %cP', 'color:green')
        } else {
          console.log('   %cF', 'color:red')
          throw new Error(`Assertion failed: ${arg} does not include ${argTwo}`)
        }
      },
    }
  }

  exports.describe = describe
  exports.it = it
  exports.expect = expect
})(this)
