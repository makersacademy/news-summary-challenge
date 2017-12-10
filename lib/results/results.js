'use strict';

(function(exports) {
  var runner = require('./runnerResult.js');
  var suite = require('./suiteResult.js');
  var unit = require('./unitResult.js');

  exports.RunnerResult = runner.RunnerResult;
  exports.SuiteResult = suite.SuiteResult;
  exports.UnitResult = unit.UnitResult;
})(this);
