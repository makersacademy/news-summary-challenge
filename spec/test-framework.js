const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const it = (msg, fn) => describe('  ' + msg, fn)

const matchers = (exp) => ({
  toBe: (asssertion) => {
    if (exp === assertion) {
      console.log('%c Test passed!', "color: green")
      return true
    } else {
      throw new Error('Fail!')
      return false
    }
  },

  toContain: (element) => {
    if (exp.includes(element)) {
      console.log(`%c Test passed! ${exp} includes ${element}!`, "color: green")
      return true
    } else {
      throw new Error(`Fail ${exp} does not include ${element}!`)
      return false
    }
  },

  notToContain: (element) => {
    if (exp.includes(element)) {
      throw new Error(`Fail ${exp} includes ${element}!`)
    } else {
      console.log(`%c Test passed! ${exp} does not include ${element}!`, "color: green")
    }
  }
})

const expect = (exp) => matchers(exp)

var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error(`Assertion failed: ${assertionToCheck} is not truthy`);
    } else {
      console.log("%c Test passed!", "color: green")
    }
  },

  isString: function (string) {
    if (!typeof string === "" || !typeof string === '') {
      throw new Error(`${string} is not a string!`)
    } else {
      console.log(`%c Test passed! ${string} is a string`, "color: green")
    }
  },

  isArray: function(array) {
    if ( array instanceof Array) {
      console.log(`%c Test passed!It is an array!`, "color: green")
    } else {
      throw new Error(`${array} is not an array!`)
    }
  },

  isEmpty: function(array) {
    if (array.length === 0) {
      console.log(`%c Test passed! ${array} is empty`, "color: green")
    } else {
      throw new Error(`${array} is not empty!`)
    }
  }
};
