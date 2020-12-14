(function(exports) {

  const testBody = document.getElementById("tests");
  const testSummary = document.getElementById("testsummary");

  function testTitle(title) {
    testBody.innerHTML += `<h2>${title}</h2>`;
    testBody.innerHTML += `<hr>`
  };
  
  function testDescription(description) {
    testBody.innerHTML += `<h4>${description}</h4>`;
  };
  
  function testResult(result) {
    if(result.includes("Passed!")) {
      fail = result
      testSummary.innerHTML += `🧞‍♂️`
      testBody.innerHTML += `<p style="color:green";>${result}</p>`;
    } else {
      testSummary.innerHTML += `❌`;
      testBody.innerHTML += `<p style="color:red";>${result}</p>`;
    };
  };

  exports.testResult = testResult;
  exports.testTitle = testTitle;
  exports.testDescription = testDescription;

})(this);
