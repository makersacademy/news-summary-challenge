var beforeEachFunction = function() {}
function beforeEach(callback) {
  beforeEachFunction = callback;
}

var printDepth = 0;
function incrementPrintDepth() {
  printDepth += 1;
}

function decrementPrintDepth() {
  printDepth -= 1;
}

function printMessage(message) {
  var indent = '    '.repeat(printDepth)
  console.log(indent + message)
}

function passed() {
  incrementPrintDepth()
  printMessage('PASSED')
  decrementPrintDepth()
}

function failed(callback) {
  incrementPrintDepth()
  printMessage('FAILED')
  callback()
  decrementPrintDepth()
}

function matcherError(callback) {
  incrementPrintDepth()
  printMessage('MATCHER ERROR')
  callback()
  decrementPrintDepth()
}

function printDivider() {
  console.log(' ')
}

function describe(description, callback) {
  incrementPrintDepth()
  printMessage(description)
  callback()
  decrementPrintDepth()
  printDivider()
}

function it(description, callback) {
  incrementPrintDepth()
  beforeEachFunction();
  printMessage(description)
  callback()
  decrementPrintDepth()
}

function expect(callback) {
  result = new Result()
  if (typeof callback === "function") {
    result.assertion = callback()
  } else {
    result.assertion = callback
  }
  return result
}

function Result() {
  this.assertion = undefined
}

Result.prototype.toEqual = function(expectation) {
  if(this.assertion === expectation) {
    passed()
  } else {
    failed(function() {
      printMessage(`Expected ${this.assertion} to equal ${expectation}`)
      printMessage(`But equals ${this.assertion}`)
    }.bind(this))
  }
}

Result.prototype.notToEqual = function(expectation) {
  if(this.assertion !== expectation) {
    passed()
  } else {
    failed(function() {
      printMessage(`Expected ${this.assertion} NOT to equal ${expectation}`)
      printMessage(`But equals ${this.assertion}`)
    }.bind(this))
  }
}

Result.prototype.toBe = function(expectation) {
  if(typeof this.assertion !== 'boolean' || typeof expectation !== 'boolean') {
    return matcherError(function() {
      printMessage('toBe can only be used with booleans')
    })
  }
  if(this.assertion === expectation) {
    passed()
  } else {
    failed(function() {
      printMessage(`Expected ${this.assertion} to be ${expectation}`)
      printMessage(`But it was ${this.assertion}`)
    }.bind(this))
  }
}
