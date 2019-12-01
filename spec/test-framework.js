const describe = (descr, fn) => {
  it(descr, fn)
  console.log('<< --- >>')
}

const it = (descr, fn) => {
  console.log(descr)
  fn()
}

const not = (fn) => {
  try {
    fn()
    throw new Error('negative test failed')
  } catch {
    console.log('.. passed')
  }
}

const isEqual = (x, y) => {
  if (x !== y) {
    console.log(`Failing values: ${x}, ${y}`)
    throw new Error('Test failed - values are not equal')
  } else {
    console.log('.. passed')
  }
}

const isArray = (x) => {
  if (!Array.isArray(x)) {
    console.log(`Failing value: ${x}`)
    throw new Error('Test failed - not of expected type Array')
  } else {
    console.log('.. passed')
  }
}

const isObject = (x) => {
  if (typeof x !== 'object') {
    console.log(typeof x)
    throw new Error('Test failed - not of expected type Object')
  } else {
    console.log('.. passed')
  }
}

const includes = (x, y) => {
  if (!x || !Array.isArray(x) || !x.includes(y)) {
    console.log(`Failing values: ${x}, ${y}`)
    throw new Error('Test failed - item not included in array')
  } else {
    console.log('.. passed')
  }
}

const isEmpty = (x) => {
  if (!x || !Array.isArray(x) || x.length !== 0) {
    console.log(`Failing value: ${x}`)
    throw new Error('Test failed - item is not empty array')
  } else {
    console.log('.. passed');
  }
}

