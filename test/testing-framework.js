/* eslint-disable no-undef */
/* eslint-disable no-console */
'use strict';

var assert = {
  equal: function(actual, expected) {
    if (actual != expected) {
      throw `${actual} does not match ${expected}`;
    }
    return true;
  }
};

function describe(testCase, callback) {
  console.log('\x1b[33mTest case: ' + testCase + '\x1b[0m');
  callback();
}

function it(description, callback) {
  try {
    callback();
    console.log(`\x1b[32m Success: \n ${description} \x1b[0m`);
  } catch (e) {
    console.log(`\n\x1b[31m Fail: \n ${description}.\n  Reason: ${e}
    \x1b[0m`);
  }
}

function expect(actual) {
  return {
    toEqual(expected) {
      assert.equal(actual, expected);
    }
    // toBe(actual) {
    //   assert.ok(actual);
    // },
    // toBeTruthy() {
    //   assert.ok(actual);
    // },
    // toHaveLength(expected) {
    //   assert.length(actual.length === expected);
    // }
  };
}

module.exports = {
  describe,
  it,
  expect
};
