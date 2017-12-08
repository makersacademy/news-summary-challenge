(function(exports) {
  var testsDiv = document.getElementById('tests');
  function describe(string, callback) {
    testsDiv.innerHTML += `<li>${string}</li>\n${callback()}<br><br>`;
  }

  exports.describe = describe;
})(this);
