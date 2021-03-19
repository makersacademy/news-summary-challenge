'use strict';

function expect(a) {
  return {
    toEqual: function(b){

      if(a === b)
        console.log('Pass')
      else
        console.log('Fail')
    }
  }
}

function it(label, callback ) {
  console.log(`Test: ${label}`)
  callback()
}

