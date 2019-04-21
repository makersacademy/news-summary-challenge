function testsInfra() {
  var testDescription = "testsInfra"
  assert.isTrue(document.getElementById("app").innerHTML === "Welcome from index.html", testDescription)
}
testsInfra()