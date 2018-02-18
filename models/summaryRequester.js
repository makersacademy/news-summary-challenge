"use strict";

(function (exports) {
  function SummaryRequester(summary = null) {
    this.summary = summary
  }

  SummaryRequester.prototype.makeRequest = function(url) {
    var newRequest = new XMLHttpRequest();
    newRequest.open("GET", `https://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${url}`, false);
    newRequest.send();
    var response = newRequest.response;
    var jsonText = JSON.parse(response);
    this.summary = jsonText.sentences;
  }

  exports.SummaryRequester = SummaryRequester
})(this);
