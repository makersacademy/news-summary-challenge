var assert = {
  isTrue: function(condition) {
    if (condition) {
      console.log(`%cpassed!`, 'color: green')
    } else {
      throw new Error(`failed! ${condition} is not truthy!`)
    };
  },

  isFalse: function(condition) {
    if (!condition) {
      console.log(`%cpassed!`, 'color: green')
    } else {
      throw new Error(`failed! ${condition} is not falsey!`)
    };
  },

  exists: function(condition) {
    if (typeof condition !== 'undefined') {
      console.log(`%cpassed!`, 'color: green')
    } else {
      throw new Error(`failed! ${condition} does not exist!`)
    };
  },

  isAString: function(condition) {
    if (typeof condition === 'string') {
      console.log(`%cpassed!`, 'color: green')
    } else {
      throw new Error(`$failed! ${condition} is not a string!`)
    };
  },

  areEqual: function(condition1, condition2) {
    if (JSON.stringify(condition1) === JSON.stringify(condition2)) {
      console.log(`%cpassed!`, 'color: green')
    } else {
      throw new Error(`failed! ${condition1} does not equal ${condition2}`)
    };
  },

  isAnArray: function(condition) {
    if (Array.isArray(condition)) {
      console.log(`%cpassed!`, 'color: green')
    } else {
      throw new Error(`failed! ${condition} is not an array!`)
    };
  },

  isAnInstanceOf: function(instance, object) {
    if (instance instanceof object) {
      console.log(`%cpassed!`, 'color: green')
    } else {
      throw new Error(`failed! ${instance} is not an instance of ${object}!`)
    };
  }
};
