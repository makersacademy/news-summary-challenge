function PingPongSpec() {
  this.expectation = null;
  this._it = null;
  this._testObject = null;
}

PingPongSpec.prototype.expect = function(expectation) {
  this.expectation = expectation;
};

PingPongSpec.prototype.it = function(testDescription) {
  this._it = testDescription.toString();
};

PingPongSpec.prototype.toEqual = function(a, b) {
  return a === b;
};

PingPongSpec.prototype.expectToEqual = function(object) {
  this._testObject = object;
  this.renderTest();
  if (this.toEqual(object, this.expectation)) {
    console.log(this._it + " PASSED");
  } else {
    throw new Error(
      this._it +
        " FAILED, Expected " +
        this.expectation +
        " and got " +
        this._testObject
    );
  }
};

PingPongSpec.prototype.renderTest = function() {
  this.failHash = {
    fail_output:
      "The test: 'it " +
      this._it +
      "' FAILED, expected " +
      this.expectation +
      " and got " +
      this._testObject
  };
  this.passHash = {
    pass_output:
      "The test: 'it " +
      this._it +
      " PASSED!"
  };

  var renderer = new PingPongRenderer();

  if (this.expectation === this._testObject) {
    renderer.view(this.passHash);
  } else {
    renderer.view(this.failHash);
  }
};
