require('../test-sweet.js')
// require('test-sweet')

let executes = 0
const noop = () => { executes += 1 }

method('method', () => {
  it('executes a callback function', () => {
    const output= method('', noop)
    expect(executes).toEqual(1)
  })
})

method('represent', () => {
  it('executes a callback function', () => {
    const output= represent('', noop)
    expect(executes).toEqual(2)
  })
})

method('expect', () => {
  it('returns an object', () => {
    const output= expect(true)
    expect(typeof output).toEqual("object")

  })
})

let calls = 0
const count = () => { calls += 1 }

method('stub', () => {
  it('stubs an object and replaces it with a callback', () => {
    stub = stub(count).with("Today")
    expect(stub).toEqual("Today")
  })

  it('stubs an object and replaces it with a callback', () => {
    expect(calls).toEqual(0)
  })
  })

represent('matchers', () => {
  method('toEqual', () => {
    it('should be true when true', () => {
      output = matchers(1).toEqual(1)
      expect(output).toEqual(true)
    })
  })
  method('toInclude', () => {
    it('should work for arrays', () => {
      output = matchers([1,2,3,4]).toInclude(1)
      expect(output).toEqual(true)
    })
    it('should work for strings', () => {
      output = matchers("I am a string").toInclude("string")
      expect(output).toEqual(true)
    })
  })
  method('isInstanceOf', () => {
    it('should work', () => {
      var expression = new Date()
      output = matchers(expression).isInstanceOf(Date)
      expect(output).toEqual(true)
    })
  })
  method('toBeLessThan', () => {
    it('should work', () => {
      output = matchers(3).toBeLessThan(5)
      expect(output).toEqual(true)
    })
  })
  method('toBeGreaterThan', () => {
    it('should work', () => {
      output = matchers(3).toBeGreaterThan(1)
      expect(output).toEqual(true)
    })
  })
})
