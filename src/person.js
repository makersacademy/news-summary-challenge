'use strict';

(function(exports) {
  function Person(isCool) {
    this.isCool = isCool;
  };

  Person.prototype.says = function() {
    return 'mvp';
  };

  Person.prototype.shouts = function() {
    return this.says().toUpperCase();
  };

  exports.Person = Person;
})(this);
