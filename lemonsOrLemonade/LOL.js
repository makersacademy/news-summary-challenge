// My test environment. 
// Should have a test method for each test, possible a full spec method. 
// matchers to simplify my tests.
// methods to display the tests to the browser window.

(function LOL(exports) {
  function test(description, codeToRun) {
    let testDiv = document.createElement('div');

    let testHeader = document.createElement('li');
    testHeader.textContent = ("Testing: " + description);

    testDiv.appendChild(testHeader);

    try {
      codeToRun()
    } catch (error) {
      testDiv.appendChild(displayFail("LEMON: " + error + " UNACCEPTABLE!!!"))
      testDiv.setAttribute("style", "color: yellow")
      return testDiv
    }

    testDiv.appendChild(displayPass())
    testDiv.setAttribute("style", "color: lightblue")
    return testDiv
  }

  function displayFail(failMessage) {
    let failedTest = document.createElement('ul')
    failedTest.textContent = failMessage
    let lemon = document.createElement('IMG')
    lemon.setAttribute('src', './lemonsOrLemonade/lemon.png')
    lemon.setAttribute('height', '30px')
    failedTest.appendChild(lemon)
    return failedTest
  }

  function displayPass() {
    let passedTest = document.createElement('ul')
    passedTest.textContent = "LEMONADE"
    let lemonade = document.createElement('IMG')
    lemonade.setAttribute('src', './lemonsOrLemonade/lemonade.png')
    lemonade.setAttribute('height', '30px')
    passedTest.appendChild(lemonade)
    return passedTest
  }

  function runTests(unitTested, tests) {
    let new_div = document.createElement('div');
    new_div.setAttribute('class', 'spec');
    new_div.setAttribute('id', `spec`);
    
    let header = document.createElement('h3');
    header.textContent = unitTested;
    header.setAttribute("style", "color: lightblue")

    new_div.appendChild(header);

    tests.forEach(function(test){
      new_div.appendChild(test);
    })

    return new_div;
  }

  function spec(description, tests) {
      var specTests = runTests(description, tests)
      var testsDiv = document.getElementById('tests')
      testsDiv.appendChild(specTests)
  }

  // matchers

  function expect(testParam) {
    return {
      toEqual: function (expectParam) {
        if(testParam === expectParam) {
          return "LEMONADE"
        } else {
          throw testParam + " is not equal to " + expectParam
        }
      },

      toContain: function(item) {
        return testParam.include(item)
      },

    }
  }

  exports.expect = expect;
  exports.spec = spec;
  exports.test = test;
}(this))