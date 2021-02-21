expectEqualMatch = function(expected, actual) {
  if (expected === actual) {
    console.log("Pass")
  } else {
    console.warn("Fail")
    console.warn(`Expected ${expected} but got ${actual}`)
  }
}

const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const it = (msg, fn) => describe(' ' + msg, fn)

const include = (a, b) => a.includes(b) ? console.log("Pass") : console.log("Fail")
