var allTestLog = [];
var testLog = [];

const expect = (actual) => ({

  toEqual: (expected) => {
    if (actual === expected) { return testLog[`expect(${actual}).toEqual(${expected})`] = true }
    else { return testLog[`expect(${actual}).toEqual(${expected})`] = false };
  },

  toThrowError: (expectedError) => {
    try { actual() }
    catch(error) {
       if (expectedError === (error.message)) { return testLog[`expect(${actual}).toThrowError(${expectedError})`] = true  };
       {return testLog[`expect(${actual}).toThrowError(${expectedError})`] = error ;};
    }
    return testLog[`expect(${actual}).toThrowError(${expectedError})`] = false;
  },

  not: function(matcher) {
    this.f = new Function(`return this.${matcher}`);
    testLog[`expect(${actual}).not('${matcher}')`] = (this.f() === true ? false : ( this.f() === false ? true : this.f() ) );
    delete testLog[`expect(${actual}).${matcher}`]
  }

});

const it = (description, test) => {

  // run befores -- using a callback?
  testLog = [];
  test();
  allTestLog[description] = testLog;

};
