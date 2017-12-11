'use strict';

(function(exports) {
  var spyMaster = require('./spyMaster.js');
  var callCount = require('./callCount.js');
  var stub = require('./stub.js');

  function Spy(object, name) {
    this.calls = new callCount.CallCount();
    this.and = this;
    this.object = object;
    this.name = name;
    this.original = object[name];
  };

  Spy.prototype.returnValue = function(value) {
    this.value = value;
    return this; // to enable Jasmine syntax
  };

  Spy.prototype.callWith = function(args) {
    this.calls.registerCall(args);
  };

  Spy.prototype.called = function(args) {
    return this.calls.called();
  };

  Spy.prototype.calledWith = function(args) {
    return this.calls.calledWith(args);
  };

  Spy.prototype.reset = function() {
    this.object[this.name] = this.original;
  };

  function spyOn(object, name) {
    var spy = new Spy(object, name);
    spyMaster.registerSpy(spy);
    object[name] = stub.makeStub(spy);
    return spy;
  };

  exports.spyOn = spyOn;
})(this);
