const printResults = () => {
  let passCount = 0;
  let failCount = 0;

  for (let result of results) {
    result ? passCount++ : failCount++;
  }

  let totalTests = passCount + failCount;

  testBody.innerHTML += "<hr>";

  let textColor;
  if (passCount === totalTests) {
    textColor = "text-success";
  } else {
    textColor = "text-danger";
  }

  testBody.innerHTML += `<h3 class="${textColor}">${passCount}/${totalTests} tests passed.</h3`;
};

printResults();
