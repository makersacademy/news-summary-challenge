'use strict';

(function(exports) {
  var results = require('../results/results.js');
  var spyMaster = require('../mocks/spyMaster.js');

  function Unit(desc, block, before) {
    this.desc = desc;
    this.block = block;
    this.before = before;
  };

  Unit.prototype.setup = function() {
    for (var index = 0; index < this.before.length; index++) {
      this.before[index]();
    };
  };

  Unit.prototype.error = function() {
    try {
      this.setup();
      this.block();
    }
    catch(error) {
      return error;
    };
  };

  Unit.prototype.run = function() {
    var error = this.error();
    if (error) {
      var result = new results.UnitResult(false, this.desc, error);
    } 
    else {
      var result = new results.UnitResult(true, this.desc);
    };
    spyMaster.resetSpies();
    return result;
  };

  exports.Unit = Unit;
})(this);
