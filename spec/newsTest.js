(function(exports) {

  function testHeadlinesAreDisplayed() {
    var ncgd = new newsContentGetterDouble;
    assert.equals(document.getElementById("newsContent"), ncgd);
  }

  testHeadlinesAreDisplayed();
})(this);
