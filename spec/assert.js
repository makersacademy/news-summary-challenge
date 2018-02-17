"use strict";

var assert = {
  isTrue: function(assertionToCheck, name) {
    if (!assertionToCheck) {
      throw Error(`Fail: ${name}. Expected true but received ${assertionToCheck}.`);
    };
    console.log('%c' + `Pass: ${name}.`, 'color:green');
  },
  isA: function(instance, type, name) {
    if (!(instance instanceof type)) {
      throw Error(`Fail ${name}. Expected ${type} but received ${instance.constructor.name}.`);
    };
    console.log('%c' + `Pass: ${name}.`, 'color:green');
  }
};
