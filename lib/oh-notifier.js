#!/usr/bin/env node
'use strict';

// built-in modules
var fs = require('fs');

// package modules
var tests = require('./tests/tests.js');
var spy = require('./mocks/spy.js')
var mock = require('./mocks/mock.js')

// global suite
var runner = new tests.TestRunner();

function describe(desc, block) {
  runner.addContext(new tests.Suite(desc));
  block();
  runner.popContext();
};

function it(desc, block) {
  var test = new tests.Unit(desc, block, runner.before());
  runner.addUnit(test);
};

function expect(statement) {
  return new tests.Expectation(statement);
};

function beforeEach(block) {
  runner.addBefore(block);
};

var spyOn = spy.spyOn;

function createSpyObj(name, methods) { 
  return new mock.Mock(name, methods);
};

// main script

var source = '';

for (var counter = 2; counter < process.argv.length; counter++) {
  source += fs.readFileSync(process.argv[counter]);
};

eval(source);
var result = runner.run();
result.print();
