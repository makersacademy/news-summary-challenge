expectEqualMatcher = function(a, b) {
  if (a === b) {
    console.log("Pass")
  } else {
    console.warn("Fail")
    console.warn(`Expected ${b} but got ${a}`)
  }
}

const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const it = (msg, fn) => describe(' ' + msg, fn)

const include = (a, b) => a.includes(b) ? console.log("Pass") : console.log("Fail")