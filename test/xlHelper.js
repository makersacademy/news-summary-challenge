function describe(exp, callback) {
  console.log(`${exp}`)
  callback()
}

function it(exp, callback) {
  try {
    console.log(`» Check if it ${exp}?`)
    callback()
  } catch (e) {
    console.log(`=> Failed, ${e.message}`)
  }
}

function checkIf(that) {
  return {
    isDefined: () => {
      if (typeof (that) === "object")
        return console.log("»» It is")
    }
  }
}