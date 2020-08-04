


testList = document.getElementById("tests")

allTests.forEach(function(testDiscrip) {
  test = document.createElement("H3")
  testOutcome = document.createElement("P")
  test.innerHTML = testDiscrip[0]
  testOutcome.innerHTML = testDiscrip[1]
  testList.appendChild(test);
  testList.appendChild(testOutcome);

})
