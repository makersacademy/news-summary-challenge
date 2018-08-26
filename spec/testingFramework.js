function expect(actual) {
  function toEqual(expected) {
    if(expected == actual) {
      console.log(`Success! Actual result (${actual}) equals expected result (${expected})`)
    }
    else {
      throw new Error(`Test failed: expected ${actual} to equal ${expected}`)
    }
  }

  function toBe(expected) {         
    if(expected === actual) {
      console.log(`Success! Actual result (${actual}) is identical to expected result (${expected})`)
    }
    else {
      throw new Error(`Test failed: expected ${actual} to be identical to ${expected}`)
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
