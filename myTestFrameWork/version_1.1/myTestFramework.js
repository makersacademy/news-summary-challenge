// Describe block
const describe = (description, callback) => {
  console.log(description);
  callback();
}

// Adding nested describe blocks
// describe('Outer', () => {
//   describe('Inner', () => {
//
//   })
// })

// it block is identical to describe blocks
const it = (msg, fn) => describe('    ' + msg, fn)

// toBe mather
const mathers = (expectation) => ({
  toEqual: (assertion) => {
    if (exp === assertion) {
      console.log('PASSED')
    } else {
      console.log('FAILED')
      console.log(`Expected ${expectation} to be ${assertion}`)
    }
  }
})

// defining expect method
const expect = (exp) => matchers(exp)

// exporting methods bottom of the file so can require and test them

module.exports = {
  describe,
  expect,
  it,
  matchers
}
