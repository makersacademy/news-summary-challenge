(function(exports) {
  function SummaryView(summary) {
    this.summary = summary
  }

  SummaryView.prototype.returnSummary = function() {
    string = `<div>${this.summary}</div>`
    return string
  }
  exports.SummaryView = SummaryView
})(this)
