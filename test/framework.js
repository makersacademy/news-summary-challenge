function(exports) {
  function matchers(arg) {
    return {
      isEqualTo: function(argTwo) {
        if (arg !== argTwo) {
          console.log('   %cF', 'color:red')
          throw new Error(`Assertion failed: ${arg} does not equal ${argTwo}`)
        } else {
          console.log('   %cP', 'color:green')
        }
      }
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
    console.log(msg)
    return func()
    // the same >> return describe(msg, func)
  }

  exports.expect = expect
  exports.describe = describe
  exports.it = it
})(this)
