/* eslint-disable no-undef */
/* eslint-disable no-console */
'use strict';

var { describe, it, expect } = require('../services/testing-framework');

describe('Testing a sum', function() {
  it('Success: 2+5 to equal 7', function() {
    var test = 2 + 5;
    expect(test).toEqual(7);
  });

  it('Raised an error 2 + 5 does not equal 8', function() {
    var test = 2 + 5;
    expect(test).toEqual(8);
  });
});
