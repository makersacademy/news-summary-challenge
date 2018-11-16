(function(exports) {
  function matchers(arg) {
    return {
      isEqualTo: function(argTwo) {
        if (arg !== argTwo) {
          console.log('   %cFAIL❌', 'color:red')
          throw new Error(`Assertion failed: ${arg} does not equal ${argTwo}`)
        } else {
          console.log('   %cPASS✅', 'color:green')
        }
      },
      isInstanceOf: function(argTwo) {
        if (arg instanceof argTwo) {
          console.log('   %cPASS✅', 'color:green')
        } else {
          console.log('   %cFAIL❌', 'color:red')
          throw new Error(`Assertion failed: ${arg} is not an instance of ${argTwo}`)
        }
      },
      includes: function(argTwo) {
        if (arg.includes(argTwo)) {
          console.log('   %cPASS✅', 'color:green')
        } else {
          console.log('   %cFAIL❌', 'color:red')
          throw new Error(`Assertion failed: ${arg} does not include ${argTwo}`)
        }
      },
    }
  }

  function expect(arg) {
    return matchers(arg)
  }

  function describe(desc, func) {
    console.log(desc)
    return func()
  }

  function it(msg, func) {
    return describe(" # " + msg, func)
  }

  exports.expect = expect
  exports.describe = describe
  exports.it = it
})(this)
