(function(exports) {

  var assert = {
    isTrue: function(assertion, description = "*No description given*") {
      var result, resultsElement;
      resultsElement = document.getElementById("results")
      if (assertion) {
        result = { class: 'pass', human: "Passed!" }
      } else {
        result = { class: 'fail', human: "Failed" }
      }
      resultsElement.innerHTML += `<div>${description}: <span class="${result.class}">${result.human}</span></div>`
    }
  }

  exports.assert = assert;

})(this)
