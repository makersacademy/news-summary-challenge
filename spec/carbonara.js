var expect = function(input) {
  return {actual: input};
};

Object.prototype.toEqual = function(expected) {
 if (this.actual === expected) {
   console.log('%c Assertion passing ' + this.actual + ' equals ' + expected, 'color: green; font-weight: bold;');
 } else {
   throw new Error ('expected ' + expected + ', got: ' + this.actual);
 }
};

var init = (function() {
  var hooks = [];

  function getHook() {
    return hooks[hooks.length -1];
  }

  function setHook(func) {
    hooks.push(func);
  }

  function removeHook() {
    hooks.splice(1);
  }

  return {
  describe: function(description, callback) {
    callback();
    removeHook();
  },

  it: function(title, callback) {
    var hook = getHook();
    if (hook) hook();
    callback();
  },

  beforeEach: function(callback) {
    setHook(callback);
  }
 };
})();

var beforeEach = init.beforeEach;
var it = init.it;
var describe = init.describe;