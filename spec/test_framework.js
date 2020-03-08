const describe = (desc, fn) => {
  console.log(desc);
  fn();
}

const it = (msg, fn) => describe('  ' + msg, fn)

const expect = (exp) => ({
  toEq: (assertion) => {
    if (exp === assertion) {
      console.log('%c Pass', 'color: green')
      return true
    } else {
      console.log(`%c Fail: Expected '${assertion}', but got '${exp}'`, 'color: red')
      return false
    }
  },

  toInclude: (assertion) => {
    if (exp.includes(assertion)) {
      console.log('%c Pass', 'color: green')
      return true
    } else {
      console.log(`%c Fail: Expected '${exp}' to include '${assertion}'`, 'color: red')
      return false
    }
  },
  toBeTrue: () => {
    if (exp) {
      console.log('%c Pass', 'color: green')
      return true
    } else {
      console.log('%c Fail', 'color: red')
      return false
    }
  }
})