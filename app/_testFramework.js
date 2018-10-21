(function(exports) {
  function Assert() {
    this.passingTests = 0;
    this.failingTests = 0;
  }

  Assert.prototype.isTrue = function(assertionTocheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  };

  Assert.prototype.expect = function(storedValue) {
    this.storedValue = storedValue;
    return this.storedValue;
  };

  Assert.prototype.toEqual = function(solution) {
    if (solution === this.storedValue) {
      this.passingTests += 1;
      console.log(
        `%c Passed the test! Passed: ${
          this.passingTests
        } tests. %c Failed Tests: ${this.failingTests}`,
        "color:green",
        "color:red"
      );
    } else {
      throw new Error(
        `Expected '${solution}' but received '${this.storedValue}'`
      );
    }
  };

  exports.Assert = Assert;
})(this);
