'use strict';

(function(exports) {
  function SpyMaster() {
    this.spies = [];
  };

  SpyMaster.prototype.add = function(spy) {
    this.spies.push(spy)
  };

  SpyMaster.prototype.reset = function() {
    for (var index = 0; index < this.spies.length; index++) {
      this.spies[index].reset();
    };
  };

  var master = new SpyMaster();

  function resetSpies() {
    master.reset();
  };

  function registerSpy(spy) {
    master.add(spy)
  };

  exports.resetSpies = resetSpies;
  exports.registerSpy = registerSpy;
})(this);
