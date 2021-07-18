"use strict";

function describe(title, body) {
  console.log(title);
  body();
}

function expect(actual) {
  return {
    toEqual: function(expected) {
      if (actual === expected) {
        console.log("PASS");
      } else {
        console.log(`FAIL: expected ${actual} to equal ${expected}`);
      };
    }
  };
};

function it(label, callback) {
  console.log(`Test: ${label}`)
  callback()
};