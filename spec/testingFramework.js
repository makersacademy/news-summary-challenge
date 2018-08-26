function expect(actual) {
  function toEqual(expected) {
    if(expected == actual) {
      console.log(`Success! ${actual} equals ${expected}`)
    }
    else {
      throw new Error(`Test failed: expected ${actual} to equal ${expected}`)
    }
  }

  function toBe(expected) {         
    if(expected === actual) {
      console.log(`Success! ${actual} is identical to ${expected}`)
    }
    else {
      throw new Error(`Test failed: expected ${actual} to be ${expected}`)
    }
  }
  return {
    toEqual,
    toBe
  }
}

function it(description, callBack) {
  try {
    callBack()
  } catch(error) {
    console.log(error.stack)
  }
}

function describe(message, callback) {
  console.log(`\n${message}`)
  callback()
}
