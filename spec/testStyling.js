var consoleGreen = (testText) => {
  console.log(`%c${testText}`, "color: green; text-decoration: underline")
  document.write('<li style="color: green">' + testText + '</li>')
}
var consoleRed = (testText) => {
  console.log(`%c${testText}`, "color: red; font-weight: bold")
  document.write('<li style="color: red">' + testText + '</li>')
}

let describe = (description, callback) => {
  try {
    consoleGreen(description)
    document.write('<ul>')
      callback()
    document.write('</ul>')
  } catch (error) {
    consoleRed(error)
  }
}

let it = (description, callback) => {
  try {
    consoleGreen(description)
    callback()
  } catch (error) {
    consoleRed(error)
  }
}
