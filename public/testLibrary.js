
function expects(actual) {
  return {
    toEqual: function(expected) {
      if (actual == expected) {
        console.log("Pass")
      } else {
        console.log("Fail. Expected: " + expected + " Got: " + actual)
      }
    },
    notToEqual: function(expected) {
      if (actual != expected) {
        console.log("Pass")
      } else {
        console.log("Fail. Expected: " + expected + " Got: " + actual)
      }
    },
    toBeGreaterThan: function(expected) {
      if (actual > expected) {
        console.log("Pass")
      } else {
        console.log("Fail. Expected: " + expected + " Got: " + actual)
      }
    },
    toBeLessThan: function(expected) {
      if (actual < expected) {
        console.log("Pass")
      } else {
        console.log("Fail. Expected: " + expected + " Got: " + actual)
      }
    },
    toBe: function(expected) {
      if (actual === expected) {
        console.log("Pass")
      } else {
        console.log("Fail. Expected: " + expected + " Got: " + actual)
      }
    }
  }
}

function it(label, callback) {
	console.log(`Test: ${label}`)
	callback()
}

it('2 + 2 is equal to 4', function(){expects(2 + 2).toEqual(4)})
