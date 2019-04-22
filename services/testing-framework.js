/* eslint-disable no-undef */
/* eslint-disable no-console */
'use strict';

var assert = {
  equal: function(actual, expected) {
    if (actual != expected) {
      throw `${actual} does not match ${expected}`;
    }
    return true;
  },
  toBeInstanceof: function(actual, expected) {
    if (!(actual instanceof expected)) {
      throw `${actual} is not an instance of ${expected}`;
    }
    return true;
  },
  toRespondTo: function(actual, expected) {
    if (typeof actual[`${expected}`] !== 'function') {
      throw `${actual} is not an instance of ${expected}`;
    }
    return true;
  },
  length: function(actual, expected) {
    if (actual.length != expected) {
      throw `The length ${actual.length} is not equal to ${expected}`;
    }
    return true;
  }
};

function describe(testCase, callback) {
  console.log('\x1b[33mTest suite: ' + testCase + '\x1b[0m');
  callback();
}

function it(description, callback) {
  try {
    callback();
    console.log(`\x1b[32m Success: \n ${description} \x1b[0m`);
  } catch (e) {
    console.log(`\n\x1b[31m Fail: \n ${description}.\n  Reason: \x1b[31m${e}\x1b[0m
    \x1b[0m`);
  }
}

function expect(actual) {
  return {
    toEqual(expected) {
      assert.equal(actual, expected);
    },
    toBeInstanceof(expected) {
      assert.toBeInstanceof(actual, expected);
    },
    toRespondTo(expected) {
      assert.toRespondTo(actual, expected);
    },
    toHaveLength(expected) {
      assert.length(actual, expected);
    }
  };
}

module.exports = {
  describe,
  it,
  expect
};
