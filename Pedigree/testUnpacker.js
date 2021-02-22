const testUnpacker = (log) => {

  let testDetails = document.getElementById("test-details");
  let failedNumber = 0, testNumber = 0;
  let testString = '';

  Object.keys(log).forEach(function (key) {
      pass = true; test = log[key]; tempString = ''; failedCount = 0;
      Object.keys(test).forEach(function (key) {
          console.log(test[key])
          if (test[key] !== true ) {
            pass = false; failedCount += 1;
            tempString += key + ' <br>';
          }
      })
      if (pass === false) {
        failedNumber += 1;
        testString += `<hr><p id="fail">${key}</p>`;
        testString += `<p id="description" style="height:${((failedCount * 20) + 30)}px">${tempString}</p>`;
      }
      else { testString += `<hr><p id="pass">${key}</p>`};
      testNumber += 1;
  })

  if (failedNumber > 0) {
    result = `<p id="count1" >${failedNumber}/${testNumber} tests failed.</p>`
  }
  else {
    result = `<p id="count2">All tests passed!</p>`
  }

  testDetails.innerHTML = result + testString
}
