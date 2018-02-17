(function(exports) {

  var Jennifer = function() {
    this.subject;
    this.tests = [];
    this.executedTests = [];
  }

  Jennifer.prototype= {

    assert: function(assertion, errorMessage) {
      var testObject = {}
      try {
        assertion ? testObject.result = "Passed" : this.throwError(errorMessage)
      } catch (e) {
        testObject.result = "Failed"
        testObject.error = e
      } finally {
        this.executedTests.push(testObject)
      }
    },

    throwError: function(errorMessage) {
      throw new Error(errorMessage)
    },

    expects: function(subject) {
      this.subject =  subject;
      return this;
    },

    runTests: function(beforeBlock) {
      this.tests.forEach(test => {
        beforeBlock()
        test.test()
        this.executedTests[this.executedTests.length - 1].name = test.name
      })
      this.printTests()
    },

    printTests: function() {
      this.executedTests.forEach(test => {
        if (test.error) {
          console.log(`%c${test.name}: ${test.result}`, `color: red`);
          console.log(test.error.message);
          console.log(test.error.stack);
        } else {
          console.log(`%c${test.name}: ${test.result}`, `color: green`)
        }
      })
    },

    toBeTrue: function() {
      var errorMessage = `Expected ${this.subject} to be true.`
      this.assert(Boolean(this.subject), errorMessage)
    },

    toBeFalse: function() {
      var errorMessage = `Expected ${this.subject} to be false.`
      this.assert(!this.subject , errorMessage)
    },

    toEqual: function(objectToCompare) {
      var errorMessage = `Expected ${this.subject} to equal ${objectToCompare}.`
      this.assert(this.subject === objectToCompare, errorMessage)
    },

    toInclude: function(item) {
      var errorMessage = `Expected ${this.subject} to include ${item}.`
      this.assert(this.subject.includes(item), errorMessage)
    },

    toIncludeString: function(stringToFind) {
      var errorMessage = `Expected ${this.subject} to contain string '${stringToFind}'.`
      this.assert(this.subject.search(stringToFind) > -1, errorMessage)
    },

    // these matchers are used without expect. supply the subject directly

    toBeArray: function(subject) {
      var errorMessage = `Expected ${this.subject} to be an array.`
      this.assert(this.subject instanceof Array, errorMessage)
    },

    toBeEmptyArray: function(subject) {
      var errorMessage = `Expected ${this.subject} to be an empty array.`
      this.assert((this.subject instanceof Array && this.subject.length === 0), errorMessage)
    },

  }

  exports.jennifer = new Jennifer();

  })(this);

  function it(testName, testFunction) {
    jennifer.tests.push({name: testName, test: testFunction});
  }
