const describe = (desc, testFunc) => {
  console.log(desc)
  testFunc()
}

const it = (message, testFunc) => describe(" " + message, testFunc)

const expect = (exp) => matchers(exp)

const pass = (assertion, exp) => {
  console.log("%c PASS expected: " + assertion + " and got: " + exp, 'color: #3CB371')
  return true
}

const fail = (assertion, exp) => {
  console.log("%c FAIL expected: " + assertion + " and got: " + exp,'color: #B22222')
  return false
}


const matchers = (exp) => ({
  toEqual: (assertion) => {
    if (exp === assertion) {
      pass(assertion, exp)
    } else {
      fail(assertion, exp)
    }
  },
  toNotEqual: (assertion) => {
    if(exp != assertion) {
      pass(assertion, exp)
    } else {
      fail(assertion, exp)
    }
  },
  toMostlyEqual: (assertion) => {
    if (exp == assertion) {
      pass(assertion, exp)
    } else {
      fail(assertion, exp)
    }
  },

  toRaiseError: (assertion) => {
    let pass = false;
    try {
      exp();
    } catch(e) {
      pass = true;
    } finally {
      if (pass === true) {
        console.log("%c PASS expected: an error and got: an error message",'color: #3CB371')
        return true
      } else {
        console.log("%c FAIL expected: " + assertion + " and got: " + exp,'color: #B22222')
        return false
      }
    }
  }



})
