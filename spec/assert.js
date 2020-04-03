'use strict';

let assert = {
  isTrue: function(assertionToCheck) {
    if(!assertionToCheck) {
      throw new Error ('Assertion failed: ' + assertionToCheck + ' is not truthy');
    }
  }
}
