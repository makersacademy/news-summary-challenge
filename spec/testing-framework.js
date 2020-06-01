(function (exports){
  function it(statement, callback){
    console.log(`Test: ${statement}`)
    callback()
  }

  function expect(assertion){
    return {
      toEqual: function(expectation){
        if(assertion === expectation){
          console.log(`Pass. ${assertion} equals ${expectation}`)
        } else {
          console.log(`Fail. ${assertion} does not equal ${expectation}`)
        }
      },

      toBeGreaterThan: function(expectation){
        if(assertion > expectation){
          console.log(`Pass. ${assertion} is greater than ${expectation}`)
        } else {
          console.log(`Fail. ${assertion} is not greater than ${expectation}`)
        }
      },

      toBeLessThan: function(expectation){
        if(assertion < expectation){
          console.log(`Pass. ${assertion} is less than ${expectation}`)
        } else{
          console.log(`Fail. ${assertion} is not less than ${expectation}`)
        }
      }
    }
  }

  let assert = {
    isTrue: function (assertion) {
      if (!assertion) {
        throw new Error('Assertion failed: ' + assertion + ' is not truthy');
      }
    },
  };
  exports.it = it
  exports.expect = expect
  exports.assert = assert

})(this)
