(function (exports) {
  const describe = (description, callback) => {
    console.log(description)
    callback()
  }

  const it = (msg, callback) => {
    console.log('   ' + msg)
    callback()
  }

  const matchers = (exp) => ({
    toEq: (val) => {
      if (exp === val) {
        console.log('%c     passed', 'color: #00ff00')
      } else {
        console.log(`%c     Failed. (expect ${exp} to equal ${val})`, 'color: #ff0000')
      }
    },
    toBeInstanceOf: (val) => {
      if (exp instanceof val) {
        console.log('%c     passed', 'color: #00ff00')
      } else {
        console.log(`%c     Failed. (expect ${exp} to be instance of ${val})`, 'color: #ff0000')
      }
    },
    toHaveLength: (val) => {
      if (exp.length === val) {
        console.log('%c     passed', 'color: #00ff00')
      } else {
        console.log(`%c     Failed. (expect length of ${exp.length} to be ${val})`, 'color: #ff0000')
      }
    }
  })
  const expect = (exp) => matchers(exp)

  exports.describe = describe
  exports.it = it
  exports.expect = expect
  // exports.matchers = matchers
})(this)
