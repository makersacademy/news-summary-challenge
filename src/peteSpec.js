'use strict';

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

describe("This is a describe block", function() {
  it("This is an it block", function() {
    expect("abcdefg").toContain("x")
  })
})