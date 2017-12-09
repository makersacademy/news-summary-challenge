'use strict';
(function(exports) {
  function Expectation(statement) {
    this.statement = statement;
  };

  Expectation.prototype.toBe = function(x) {
    if (this.statement !== x) {
      throw new Error(`expected ${this.statement} to be ${x}`);
    };
  };

  Expectation.prototype.toEqual = function(x) {
    if (this.statement != x) {
      throw new Error(`expected ${this.statement} to equal ${x}`);
    };
  };

  Expectation.prototype.toBeEmpty = function() {
    if (this.statement.length !== 0) {
      throw new Error(`expected ${this.statement} to be empty`)
    };
  };

  Expectation.prototype.toContain = function(x) {
    if (!this.statement.includes(x)) {
      throw new Error(`expected ${this.statement} to contain ${x}`)
    };
  };

  Expectation.prototype.toHaveBeenCalled = function() {
    if (!this.statement.called()) {
      throw new Error(`expected function to have been called`);
    };
  };

  Expectation.prototype.toHaveBeenCalledWith = function(...x) {
    if (!this.statement.calledWith(x)) {
      throw new Error(
        `expected function to have been called with ${x}`
      );
    };
  };

  exports.Expectation = Expectation;
})(this);
