function describe(exp, callback) {
  console.log(`${exp}`)
  callback()
}

function it(exp, callback) {
  try {
    console.log(`» Check if it ${exp}?`)
    callback()
  } catch (e) {
    console.log(`»»» ${e}`)
  }
}

function checkIf(that) {
  return {
    isClass: () => {
      if (typeof (that) === "object")
        return console.log(`»» It is.`)
    },
    has: (f) => {
      let proto = that.constructor.prototype
      if (`${f}` in proto) {
        return {
          function: () => {
            return console.log(`»» It is.`)
          }
        }
      }
      return console.log(`»» ${f} is not a function.`)
    },
    isEqual: (exp) => {
      if (that == exp)
        return console.log(`»» It is equal: ${that} == ${exp}.`)
      return console.log(`» ${that} is NOT equal to ${exp}.`)
    },
    isIdenticalTo: (exp) => {
      if (that === exp)
        return console.log(`»» It is identical: ${that} === ${exp}.`)
      return console.log(`» ${that} is NOT identical to ${exp}.`)
    },
    isTrue: () => {
      if (that)
        return console.log(`»» It is.`)
      return console.log(`»» It is NOT.`)
    },
    isFalse: () => {
      if (!that)
        return console.log(`»» It is.`)
      return console.log(`»» It is NOT.`)
    }
  }
}