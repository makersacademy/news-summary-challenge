(function (exports) {
  let summaryDiv = document.getElementById('summary')

  function viewSummary(summary) {
    summaryDiv.innerHTML = summary
  }

  exports.viewSummary = viewSummary
})(this)