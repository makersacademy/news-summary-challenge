'use strict';
let TEST = true;

function expect(actual) {
  return {

    toEqual: function(expected) {
      if(actual === expected)
        console.log('Pass')
      else
        console.log(`Fail - Expected ${actual} to equal ${expected}`)
    },

    toContain: function(expected) {
      if(actual.search(expected) !== -1)
        console.log('Pass')
      else
        console.log(`Fail - Expected ${actual} to contain ${expected}`)
    },

    toBeA: function(expected) {
      if(actual.constructor.name === expected.name)
        console.log('Pass')
      else
        console.log(`Fail - Expected ${actual.constructor.name} to be a ${expected.name}`)
    }
    
  }
}

function it(label, callback ) {
  console.log(`${label}`)
  callback()
}

function describe(label, callback ) {
  console.log(`${label}`)
  callback()
}
