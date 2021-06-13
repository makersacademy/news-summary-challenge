function spyOn(object, method) {
  object[method] = (function() {
    let numberOfCalls = 0
    let calledWithArguments = []
    function spyFunction(...args) {
      numberOfCalls++
      calledWithArguments = args
    }
    spyFunction.getnumberOfCalls = () => {
      return numberOfCalls
    }
    spyFunction.getCallArguments = () => {
      return calledWithArguments
    }
    return spyFunction
  })()
  return object[method]
}

function describe(block, callback) {
  console.log(`${block}`)
  callback()
}

function expect(a) {
  return {
    toBe: function(b) {
      // compare a and b
      if (a === b) {
        console.log('Pass')
      } else {
        console.log('Fail')
      }
    },
    toEqual: function(b) {
      // compare a and b
      if (a == b) {
        console.log('Pass')
      } else {
        console.log('Fail')
      }
    },
    toBeInstanceOf: function(b) {
      if (a instanceof b) {
        console.log("Pass")
      } else {
        console.log("Fail")
      }   
    },

    toThrowError: function(b) {
      try {
        a()
        console.log("Fail")
      }
      catch (exception_var) {
        if (exception_var === b) {
          console.log("Pass")
        } else {
        console.log(`Fail. Expected ${b}; Got ${exception_var}`)
        }
      }
    },

    toHaveBeenCalledWithArguments: function(b) {
      if (a.getCallArguments === b) {
        console.log("Pass")
      } else {
        console.log("Fail")
      }   
    }
  }
}

function it(label, callback) {
  console.log(`Test: ${label}`)
  callback()
}