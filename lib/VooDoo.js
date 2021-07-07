var failedTests = 0
var passedTests = 0
var passList = []
var failList = []

function TestResult(test, trace) {
  this.test = test
  this.trace = trace
}

voodoo = function(testList, startPoint) {
  startPoint = (startPoint || 0)
  try {
    for (var i = startPoint; i < testList.length; i++) {
      (testList[i])()
    }
  } catch(err) {
    result((err.name.toString() + ': ' + err.message.toString()), failList, err.stack)
    failedTests++;
    voodoo(testList, (i+1));
  }
}

result = function(test, list, trace) {
  var trace = (trace || null)
  var result = new TestResult(test, trace)
  list.push(result)
}

testPrF = function(string) {
  if(string.slice(0, 6) === 'Test P') {
    return('green')
  } else {
    return('firebrick')
  }
}

function testFailError() {
  throw new Error();
}

function _assert(test, desc, failMsg) {
  test ? passedTests++ : failedTests++;
  try {
    test ? result(('Test Passed: ' + desc), passList) : testFailError()
  } catch(err) {
    result(('Test Failed: ' + desc + "<br> &nbsp;&nbsp;&nbsp;" + failMsg), failList, err.stack)
  }
}

function _assertEquals(a, b, desc) {
  failMsg = "Expected " + a + " to equal " + b
  _assert(a == b, desc, failMsg)
}

function _assertExact(a, b, desc) {
  failMsg = "Expected " + a + " to equal exactly " + b
  _assert(a === b, desc, failMsg)
}

function _assertTrue(x, desc) {
  failMsg = "Expected: true, instead of: " + x
  _assert(x == 1, desc, failMsg)
}

function _assertFalse(x, desc) {
  failMsg = "Expected: false, instead of: " + x
  _assert(x == 0, desc, failMsg)
}

function _assertError(desc, funct, args) {
  failMsg = "Expected function to throw error"
  var hasThrown = false
  try {
    args === null ? funct() : funct(args)
  } catch(e) {
    hasThrown = true
  } finally {
    _assert(hasThrown, desc, failMsg)
  }
}

function testTrue(desc, val) {
  _assertTrue(val, desc)
}

function testFalse(desc, val) {
  _assertFalse(val, desc)
}

function testEquals(desc, val1, val2) {
  _assertEquals(val1, val2, desc)
}

function testExactEquals(desc, val1, val2) {
  _assertExact(val1, val2, desc)
}

function testError(desc, funct, args) {
  var args = (args || null)
  _assertError(desc, funct, args)
}
