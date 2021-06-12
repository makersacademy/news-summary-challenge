const testList = document.querySelector("#test-report");

const test = (id, label, result) => {
  return {
    id,
    label,
    result
  }
}

let currentTest;
let idx = 0

function it (label, callback) {
  idx++;
  currentTest = test(idx, label, "");
  callback();
}

function expect(input) {
  return {
    toEqual(output) {
      if (input == output) {
        logTestResults("pass");
      } else {
        logTestResults("fail");
      }
      showTestResults();
    }
  }
}

function logTestResults(res) {
  currentTest.result = res;
}

function addListItem() {
  const li = document.createElement("LI");
  li.innerText = `${currentTest.label}: ${currentTest.result}`;
  li.className = currentTest.result;
  testList.appendChild(li);
}

function showTestResults() {
  addListItem()
  console.log(`${currentTest.id}. ${currentTest.label}: ${currentTest.result}`);
}
