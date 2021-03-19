'use strict';

function expect(actual) {
  return {
    toEqual: function(expected) {
      if(actual === expected)
        console.log('Pass')
      else
        console.log(`Fail - Expected ${actual} to equal ${expected}`)
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

// Test Block
describe("This is a describe block", function() {
  it("This is an it block", function() {
    expect(1+2).toEqual(3)
  })
})