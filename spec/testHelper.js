const describe = (description, fn) => {
  console.log(description);
  fn();
}

const it = (message, fn) => {
  describe('Test: ' + message, fn)
}

const expect = (expectation) => ({
  
  toEq: (assertion) => {
    if (expectation === assertion) {
      console.log('%c Pass', 'background-color: #e0f7be; color: green; ')
    } else {
      console.log(`%c Fail: Expected '${assertion}' but got '${expectation}'`, 'background-color: #ffe2e0; color: red;')
    }
  },

  toBeTypeOfArray: () => {
    if (Array.isArray(expectation)) {
     console.log('%c Pass', 'background-color: #e0f7be; color: green; ') 
    } else {
     console.log(`%c Fail: Expected '${assertion}' but got '${expectation}'`, 'background-color: #ffe2e0; color: red;') 
    }
  }

})