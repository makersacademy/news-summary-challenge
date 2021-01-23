function describe(expression, callback) {
  console.log(`${label}`)
  callback()
}

function it(label, callback) {
  try {
    console.log("PASS:", label)
    callback()
  } catch (error) {
    callback.log("FAIL:", error)
  }
}