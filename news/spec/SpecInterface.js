var testString = ""
var dots = ""
function displayTestDesc(bait) {
  testString += bait + "<br>";
}

function displayTests(tests) {
  testString += formatTest(tests)
  document.getElementById("tests").innerHTML = (testString);
  document.getElementById("test-summary").innerHTML = (dots)
}

function formatTest(tests) {
  let testResult = ""
  if(tests.includes('Success')) {
    testResult = 'pass';
    dots += `<span class='${testResult}'>`+"Pass" + "</span>"
  } else {
    testResult = 'fail';
    dots += `<span class='${testResult}'>`+"Fail" + "</span>"
  }
  return (`<div class='${testResult}'>` + tests + "</div><br>")
}
