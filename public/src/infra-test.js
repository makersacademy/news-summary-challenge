function testsInfra() {
  var testDescription = "testsInfra"
  assert.isTrue(document.getElementById("app").innerHTML === "Welcome", testDescription)
}
testsInfra()