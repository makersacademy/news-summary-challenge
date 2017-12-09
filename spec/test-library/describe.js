(function (exports) {
  function describe (objectToTest, describeBlock) {
    var output = document.getElementById('tests')
    output.innerHTML += `<h3>${objectToTest}</h3>`
    describeBlock()
  }

  exports.describe = describe;

})(this)
