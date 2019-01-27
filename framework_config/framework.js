//takes in a description and test code to execute
const describe = (description, fn)=> {
  let output = document.createElement('div')
  // output.appendChild(description)
  console.log(description)
  fn()
}

const can = (message, fn) => {
  console.log(' -- ' + message)
  fn()
}

//matchers definitions
const matchers = (exp) => ({
  toEq: (assertion) => {
    if (exp === assertion) {
      console.log('%c Pass! Expected: ' + exp + ' Got: ' + assertion, 'color:#25A300')
      return true
    } else {
      console.log('%c Fail! Expected: ' + exp + ' Got: ' + assertion, 'color:#f75')
      return false
    }
  },
  toThrowError: (assertion) => {
    var e;
    try {
      exp();
    }
    catch(error) {
      e = error.message
    }
    finally{
      if (e === assertion) {
        console.log('%c Pass! Expected: ' + e + ' Got: ' + assertion, 'color:#25A300')
        return true
      } else {
        console.log('%c Fail! Expected: ' + e + ' Got: ' + assertion, 'color:#f75')
        return false
      }
    }
  },
  toBeAnInstanceOf: (assertion) => {
    if (exp instanceof assertion) {
      console.log('%c Pass! Expected: ' + exp + ' Got: ' + assertion, 'color:#25A300')
      return true
    } else {
      console.log('%c Fail! Expected: ' + exp + ' Got: ' + assertion, 'color:#f75')
      return false
    }
  }
});

const expect = (exp) => matchers(exp)
