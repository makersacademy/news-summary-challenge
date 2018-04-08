let testResult;

let test = {
  isEqual: function(assertationToTest) {
    if (!assertationToTest) {
      testResult = `Test FAILED: ${assertationToTest} is not true.`
      console.log(`The assertion value is ${testResult}`);
      document.getElementById("result").innerHTML += `<p class="failed">${testResult}</p></br></br>`;
      let failures = document.getElementsByClassName("failed");
      for(let i = 0; i < failures.length; i++) {
        failures[i].style.color = "red";
      };
      throw new Error("Test FAILED: " + assertationToTest + " is not true.")
    } else {
      console.log("PASSED");
      document.getElementById("result").innerHTML += "<p class=\"passed\">Test PASSED</p></br></br>";
      let passes = document.getElementsByClassName("passed");
      for(let i = 0; i < passes.length; i++) {
        passes[i].style.color = "green";
      };
    }
  }
};
