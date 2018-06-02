var consoleGreen = (testText) => {
  console.log(`%c${testText}`, "color: green; text-decoration: underline")
  document.write('<li style="color: green">' + testText + '</li>')
}
var consoleRed = (testText) => {
  console.log(`%c${testText}`, "color: red; font-weight: bold")
  document.write('<li style="color: red">' + testText + '</li>')
}

var assert = {
  isTrue: (assertionToCheck) => {
    if (!assertionToCheck) {
      throw new Error(`Test failed: ${assertionToCheck} is not truthy`)
    }
  },
  isEqual: (resultToCheck, expectedResult) => {
    if (resultToCheck != expectedResult) {
      throw new Error(`Test failed: ${resultToCheck} didn't equal ${expectedResult}`)
    }
  },
  isEmpty: (resultToCheck) => {
    if (!(Object.keys(resultToCheck).length === 0)) {
      throw new Error(`Test failed: object is not empty`)
    }
  },
  isAnArray: (object) => {
    if (!(Array.isArray(object))) {
      throw new Error(`Test failed: ${object} is not an array`)
    }
  },
  arrayContains: (container, resultToFind) => {
    if (!(container.includes(resultToFind))) {
      throw new Error(`Test failed: ${resultToFind} is not in ${container}`)
    }
  }
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

let respondsTo = (funkyFunction, callback) => {
  try {
    callback in funkyFunction ? consoleGreen(`${callback} exists`) : consoleRed(`${callback} does not exist`)
  } catch (error) {
    consoleRed(error)
  }
}

let spyOn = (funkyObject, funkyMethod) => {
  try {
    funkyObject[funkyMethod] = function () {
      consoleGreen(`${funkyMethod} has been called`)
    }
  } catch (error) {
    consoleRed(error)
  }
}
