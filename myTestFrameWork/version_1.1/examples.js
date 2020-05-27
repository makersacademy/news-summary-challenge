
const {
  describe,
  it,
  expect,
  matchers
} = require('./myTestFramework')

let executes = 0
const noop = () => { executes += 1 }

describe('describe', () => {
  it('executes a callback function', () => {
    const actual = describe('', noop)

    expect(executes).toBe(1)
  })
})
