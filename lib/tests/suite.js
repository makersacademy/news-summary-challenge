'use strict';

(function(exports) {
  var results = require('../results/results.js');

  function Suite(desc) {
    this.desc = desc;
    this.before = [];
    this.units = [];
  };

  Suite.prototype.addBefore = function(before) {
    this.before.push(before);
  };

  Suite.prototype.copyBefore = function() {
    return this.before.slice();
  };

  Suite.prototype.addUnit = function(unit) {
    this.units.push(unit);
  };

  Suite.prototype.run = function(level) {
    var result = new results.SuiteResult(this.desc);
    for (var index = 0; index < this.units.length; index++) {
      result.add(this.units[index].run());
    };
    return result;
  };

  exports.Suite = Suite;
})(this);
