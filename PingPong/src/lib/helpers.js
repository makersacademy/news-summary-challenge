'use strict';

(function (exports) { 
  exports.before = function (callback) {
    helpers.add('before', callback);
  }; 
})(this);

(function (exports) {
  exports.beforeEach = function (callback) {
    helpers.add('beforeEach', callback);
  };
})(this);

(function (exports) { 
  exports.after = function (callback) {
    helpers.add('after', callback);
  }; 
})(this);

(function (exports) {
  exports.afterEach = function (callback) {
    helpers.add('afterEach', callback);
  };
})(this);

(function (exports) {

  var _beforeEach = [];
  var _before = [];
  var _afterEach = [];
  var _after= [];

  function helper(type) {
    switch (type) {
      case 'before':
        return _before;
      case 'beforeEach':
        return _beforeEach;
      case 'after':
        return _after;
      case 'afterEach':
        return _afterEach;
    };
  };

  function add(type, callback) {
    helper(type).push([output.describeLevel(), callback]);
  };

  function run(type, describeLevel = 1) {
    var level = describeLevel;
    if (type === 'after') {
      helper(type).forEach(function (helper) {
        var callback = helper[1];
        if (helper[0] === level) callback();
      });
    } else {
      helper(type).forEach(function (helper) {
        var callback = helper[1];
        if (helper[0] <= level) callback();
      });
    }
  };
  
  function reset(level) {
    _before = [];
    clearHelperSet(_beforeEach, level);
    clearHelperSet(_afterEach, level);
  };

  function clearHelperSet(helper, level) {
    for (var i = 0; i < helper.length; i++) {
      if (helper[i][0] === level) {
        helper.splice(i, 1);
      }
    }
  };

  exports.helpers = {
    run: run,
    reset: reset,
    add: add,
  }

})(this);
