"use strict";

(function (exports) {
  function SummaryView(summaryRequester) {
    this.summaryRequester = summaryRequester
  }

  SummaryView.prototype.parse = function () {
    var string = "<p id='summary'>"
    this.summaryRequester.summary.forEach(function(sentence) {
      string += (sentence + " ")
    })
    string += "</p>"
    return string
  };

  exports.SummaryView = SummaryView

})(this);
