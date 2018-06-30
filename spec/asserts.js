"use strict";

var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error(`Expected ${assertionToCheck} to be true, but was false`);
    }
  }
}
