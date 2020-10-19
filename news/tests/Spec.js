let currentTest = {};
let resultHTML = "";

function it(description, steps) {
  let test = new Test(description, steps);
  runTest(test);
}

function webIt(description, url, steps) {
  let testWindow = window.open(url);
  let test = new Test(description, steps);
  testWindow.onload = function() {
    runWebTest(test, testWindow);
  };
}

function expect(actual) {
  return {
    toEqual(expected) {
      if (actual === expected) {
        currentTest.result = { status: "pass" };
      } else {
        currentTest.result = { status: "fail", expected: expected, actual: actual };
      }
    },
    toHaveContent(expected) {
      if (actual.includes(expected)) {
        currentTest.result = { status: "pass" };
      } else {
        currentTest.result = { status: "fail", expected: expected, actual: actual };
      }
    },
    notToHaveContent(expected) {
      if (!actual.includes(expected)) {
        currentTest.result = { status: "pass" };
      } else {
        currentTest.result = { status: "fail", expected: expected, actual: actual };
      }
    }
  };
}

function runWebTest(test, testWindow) {
  test.testSteps(testWindow);
  let result = currentTest.result;
  outputTestResultHtml(test, result);
  outputTestResultConsole(test, result);
  closeWindow(testWindow);
}

function runTest(test) {
  test.testSteps();
  let result = currentTest.result;
  outputTestResultHtml(test, result);
  outputTestResultConsole(test, result);
}

function outputTestResultConsole(test, result) {
  console.log(result);
}

function outputTestResultHtml(test, result) {
  formatTestResult(test, result);
  let testsElement = document.getElementById('tests');
  let html = "<div id='test-results'>" + resultHTML + "</div>";
  testsElement.innerHTML = html;
}

function formatTestResult(test, result) {
  let desc = `<div class='${result.status}'><span id="test-title">${test.description}</span><br>`;
  if (result.status === "pass") {
    resultHTML += desc + `Pass</div><br>`;
  } else {
    resultHTML += desc + `Fail<br>Expected ${result.expected} but instead got ${result.actual}</div><br>`;
  }
}

function populateForm(testWindow, elementId, value) {
  let field = testWindow.document.getElementById(elementId);
  field.value = value;
}

function closeWindow(testWindow) {
  testWindow.close();
}

function clickButton(testWindow, elementId) {
  let button = testWindow.document.getElementById(elementId);
  button.click();
}