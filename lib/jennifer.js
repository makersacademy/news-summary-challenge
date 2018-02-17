(function jenniferModule(exports) {
  const Jennifer = function jenniferConstructor() {
    this.tests = [];
    this.executedTests = [];
  };

  Jennifer.prototype = {

    assert(assertion, errorMessage) {
      const testObject = {};
      try {
        assertion ? testObject.result = 'PASSED' : this.throwError(errorMessage);
      } catch (error) {
        testObject.result = 'FAILED';
        testObject.error = error;
      } finally {
        this.executedTests.push(testObject);
      }
    },

    throwError(errorMessage) {
      throw new Error(errorMessage);
    },

    expects(subject) {
      this.subject = subject;
      return this;
    },

    runTests(beforeBlock = function () {}) {
      this.tests.forEach((test) => {
        beforeBlock();
        test.test();
        this.executedTests[this.executedTests.length - 1].name = test.name;
      });
      this.printTests();
    },

    printTests() {
      this.executedTests.forEach((test) => {
        if (test.error) {
          console.log(`%c${test.name}: ${test.result}`, 'color: red');
          console.log(test.error.message);
          console.log(test.error.stack);
        } else {
          console.log(`%c${test.name}: ${test.result}`, 'color: green');
        }
      });
    },

    toBeTrue() {
      const errorMessage = `Expected ${this.subject} to be true.`;
      this.assert(Boolean(this.subject), errorMessage);
    },

    toBeFalse() {
      const errorMessage = `Expected ${this.subject} to be false.`;
      this.assert(!this.subject, errorMessage);
    },

    toEqual(objectToCompare) {
      const errorMessage = `Expected ${this.subject} to equal ${objectToCompare}.`;
      this.assert(this.subject === objectToCompare, errorMessage);
    },

    toInclude(item) {
      const errorMessage = `Expected ${this.subject} to include ${item}.`;
      this.assert(this.subject.includes(item), errorMessage);
    },

    toIncludeString(stringToFind) {
      const errorMessage = `Expected ${this.subject} to contain string '${stringToFind}'.`;
      this.assert(this.subject.search(stringToFind) > -1, errorMessage);
    },

    // these matchers are used without expect. supply the subject directly

    toBeArray() {
      const errorMessage = `Expected ${this.subject} to be an array.`;
      this.assert(this.subject instanceof Array, errorMessage);
    },

    toBeEmptyArray() {
      const errorMessage = `Expected ${this.subject} to be an empty array.`;
      this.assert((this.subject instanceof Array && this.subject.length === 0), errorMessage);
    },

  };

  exports.jennifer = new Jennifer();
}(this));

function it(testName, testFunction) {
  jennifer.tests.push({ name: testName, test: testFunction });
}
