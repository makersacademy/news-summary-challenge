'use strict';

(function(exports) {
  var results = require('../results/results.js');
  var suite = require('./suite.js');

  function TestRunner() {
    var base = new suite.Suite();
    this.blocks = [base];
  };

  TestRunner.prototype.addContext = function(suite) {
    suite.before = this.current().copyBefore();
    this.addUnit(suite);
    this.blocks.push(suite);
  };

  TestRunner.prototype.before = function() {
    return this.current().before;
  };

  TestRunner.prototype.addUnit = function(unit) {
    this.current().addUnit(unit);
  }

  TestRunner.prototype.addBefore = function(before) {
    this.current().addBefore(before);
  };

  TestRunner.prototype.popContext = function(suite) {
    this.blocks.pop(suite);
  };

  TestRunner.prototype.current = function() {
    return this.blocks.slice(-1)[0];
  };

  TestRunner.prototype.run = function() {
    var base = this.blocks[0].run();
    return new results.RunnerResult(base);
  };

  exports.TestRunner = TestRunner;
})(this);
