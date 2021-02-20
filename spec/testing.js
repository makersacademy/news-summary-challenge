"use strict";

function expect(actual) {
  return {
    toEqual: function(expected) {
      if (actual == expected ) {
        console.log('Pass')
      } else {
        console.log('Fail')
        console.log(`${actual} does not equal ${expected}`)
      }
    },

    toSrictlyEqual: function(expected) {
      if (actual === expected ) {
        console.log('Pass')
      } else {
        console.log('Fail')
        console.log(`${actual} does not equal ${expected}`)
      }
    },

    toArrayEqual: function(expected) {
      for (var i = 0; i < expected.length; i++ ) {
        if (actual[i] != expected[i]) {
          console.log('Fail')
          return console.log(`${actual} does not match ${expected}`)
        } // if
      } // for
      console.log('Pass')
    }, // toArrayEqual

    toHashEqual: function(expected) {
      var expectedLength = Object.keys(expected).length;
      var actualLength = Object.keys(actual).length;
        if (actualLength !== expectedLength) {
          console.log('Fail')
          return console.log(`Hash does not have enough elements`)
        } else {
          for (var i = 0; i < expectedLength; i++ ) {
            if (actual[i] != expected[i]) {
              console.log('Fail')
              return console.log(`${actual} does not match ${expected}`)
            } // if
          } //for
        } // else if
      console.log('Pass')
    } // toHashLengthEqual
  } // return
} // expect

function it(label, callback) {
  console.log(`Test: ${label}`)
  callback()
};

// function keys(hash) {
//   return {
//     length: function() {
//       var count = 0;
//       for (key in hash) {
//         if hash.hasOwnProperty(key)) {
//           count++
//         }
//       }
//       return count
//     }
//   }
// }


///----

it('2+2 = 4', function() {
  expect(2+2).toEqual(4)
  })

it('2+3 = 4', function() {
  expect(2+3).toEqual(4)
  })

it('7*3 = 21', function() {
  expect(7*3).toEqual(21)
})

it('7*4 = 21', function() {
  expect(7*4).toEqual(21)
})

it('array matcher', function() {
  expect([1,2,3]).toArrayEqual([1,2,3])
})

it('array matcher', function() {
  expect([1,2,4]).toArrayEqual([1,2,3])
})

it('array matcher', function() {
  expect([1,2,4]).toArrayEqual([1,3])
})

it('matches correct hashes', function() {
  expect({1: 'hello'}).toHashEqual({27: 'hello'})
})

it('matches hashes', function() {
  expect({1: 'hell', 2: 'bob'}).toHashEqual({27: 'hello'})
})
