'use strict';

(function(exports) {
  var utils = require('./utils.js');
  var headline = 'OhNotifier Test Runner (v1.0)';

  function RunnerResult(base, desc) {
    this.base = base
    this.desc = (desc === undefined ? headline : desc);
  };

  RunnerResult.prototype.header = function() {
    utils.asColour(this.desc, 'blue')
  };

  RunnerResult.prototype.footer = function() {
    var total = this.countAll();
    var failures = this.countFailures();
    var colour = (failures > 0 ? 'red' : 'blue');
    utils.asColour(`\n${total} tests run, ${failures} failed`, colour);
    this.base.printError();
  };

  RunnerResult.prototype.countAll = function() {
    return this.base.countAll();
  };

  RunnerResult.prototype.countFailures = function() {
    return this.base.countFailures();
  };

  RunnerResult.prototype.print = function() {
    this.header();
    this.base.print(0);
    this.footer();
  };

  exports.RunnerResult = RunnerResult;
})(this);
