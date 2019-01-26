const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const scenario = (desc, fn) => {
  console.log(desc)
  fn()
}

const it = (msg, fn) => describe('  ' + msg, fn)

const passMessage = () => {
  console.log('    ' + '%c * pass * ', 'background: #f7a3ec; color: #6693e8')
  return true
}

const failMessage = () => {
  console.log('    ' + '%c * Fail * ', 'background: #6693e8; color: #f7a3ec')
  console.trace('  ' + '%c * Back to SquareOne * ', 'background: #6693e8; color: #f7a3ec')
  return false
}

const matchers = (exp) => ({
  toBe: (assertion) => {
    if (exp === assertion) {
      passMessage();
    } else {
      failMessage();
    }
  },

  notToBe: (assertion) => {
    if (exp !== assertion) {
      passMessage();
    } else {
      failMessage();
    }
  },

  toThrowError: (assertion) => {
    let result = false;
    try {
      exp();
    } catch(e) {
      result = true;
    } finally {
      if (result === true) {
        passMessage();
      } else {
        failMessage();
      }
    }
  }
})

const expect = (exp) => matchers(exp)
