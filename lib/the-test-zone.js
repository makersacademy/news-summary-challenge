(function(exports) {
  var resultsStack = [document.getElementById("results")]
  var failures

  Array.prototype.last = function() {
    return this[this.length - 1]
  }
  
  var wrap = function(content, element, classes) {
    var classesString = classes === undefined ? "" : ` class="${classes}"`
    return `<${element}${classesString}>${content}</${element}>`
  }

  var indent = function(className) {
    var block = document.createElement('ul')
    if (className !== undefined) {
      block.className += className
    }
    resultsStack.last().appendChild(block)
    resultsStack.push(block)
  }

  var deIndent = function() {
    resultsStack.pop()
  }

  var print = function(description, classes) {
    resultsStack.last().innerHTML += wrap(description, 'li', classes)
  }

  var printPassingTest = function(description) {
    indent("pass")
    print(description + ": passed")
    deIndent()
  }

  var printFailingTest = function(description) {
    indent("fail")
    print(description + ": failed")
    indent()
    failures.forEach(function(failure) {
      print(failure)
    })
    deIndent()
    deIndent()
  }

  var describe = function(description, blockContents) {
    indent()
    print(description)
    blockContents()
    deIndent()
  }

  var it = function(description, testBlock) {
    failures = []

    try {
      testBlock()
    } catch(error) {
      failures.push(error)
    }

    if (failures.length == 0) {
      printPassingTest(description)
    } else {
      printFailingTest(description)
    }
  }

  var expect = function(actual) {
    return {
      toBe: function(expected) {
        if (actual !== expected) {
          failures.push(`Expected ${actual} to be ${expected}.`)
        }
      },
      toContain: function(expected) {
        if (!actual.includes(expected)) {
          failures.push(`Failed - expected ${actual} to include ${expected}.`)
        }
      }
    }
  }

  exports.it = it
  exports.describe = describe
  exports.expect = expect

})(this)
