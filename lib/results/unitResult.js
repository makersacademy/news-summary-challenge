'use strict';

(function(exports) {
  var utils = require('./utils.js');

  function success(text, level) {
    utils.asColour(`${utils.indent(level)}${text}`, 'green');
  };

  function failure(text, fail, level) {
    utils.asColour(`${utils.indent(level)}${text} (${fail})`, 'red');
  };

  function UnitResult(passed, desc, error) {
    this.passed = passed;
    this.desc = desc;
    this.error = error;
  };

  UnitResult.prototype.print = function(level) {
    if (this.passed) {
      success(this.desc, level);
    }
    else {
      failure(this.desc, this.error.message, level);
    };
  };

  UnitResult.prototype.printError = function() {
    if (this.error) {
      utils.asColour(`\nFAILED: ${this.desc}`, 'red');
      utils.asColour(this.error.message);
      utils.asColour(this.error.stack, 'dim');
    };
  };

  UnitResult.prototype.countAll = function() {
    return 1;
  };

  UnitResult.prototype.countFailures = function() {
    return !this.passed;
  };

  exports.UnitResult = UnitResult;
})(this);
