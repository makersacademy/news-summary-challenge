(function (exports) {



  function describe(desc_description, it_function) {
    testsDiv = document.getElementById('tests')
    testDiv = document.createElement('div');
    testHeader = document.createElement('ul');
    testSubHeader = document.createElement('li')
    testHeader.textContent = (desc_description);
    testHeader.style.fontSize = "large";
    testSubHeader.textContent = (it_function)

    new_div = testsDiv.appendChild(testDiv).appendChild(testHeader).appendChild(testSubHeader)

    return new_div
  };

  function it(it_description, codeToRun) {
      if (!codeToRun) {
        return ("Test failed: " + it_description + " does not evaluate to true")
      } else {
        return ("Test passed: " + it_description)
      }
  };

  exports.describe = describe
  exports.it = it
})(this);

