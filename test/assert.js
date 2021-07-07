var assert = {

  isTrue: function(assertionToCheck, name) {
    if (!assertionToCheck) {
      throw Error(`Fail: ${name}. Expected true but received ${assertionToCheck}.`);
    };
  },

  isA: function(instance, type, name) {
    if (!(instance instanceof type)) {
      throw Error(`Fail ${name}. Expected ${type.name} but received ${instance.constructor.name}.`);
    };
  },

  isEqual: function(instance1, instance2, name) {
    if (instance1 !== instance2) {
      throw Error(`Fail ${name}. Expected ${instance1} to equal ${instance2}.`);
    };
  },

  isEmpty: function(array, name) {
    if (array.length !== 0) {
      throw Error(`Fail ${name}. Expected ${array} to be empty but length was ${array.length}.`);
    };
  },

  contains: function(array, item, name) {
    if (!array.includes(item)) {
      throw Error(`Fail ${name}. Expected ${array} to include ${item} but contained ${array}`);
    };
  },

  is0: function(number, name) {
    if(number !== 0) {
      throw Error(`Fail ${name}. Expected ${number} to equal 0.`);
    };
  }

};
