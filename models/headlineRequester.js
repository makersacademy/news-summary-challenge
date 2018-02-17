"use strict";

(function(exports) {
  function HeadlineRequester(secretkey) {
    this.secretkey = secretkey;
    this.headlines = null;
  }

  HeadlineRequester.prototype.makeRequest = function() {
    var newRequest = new XMLHttpRequest();
    newRequest.open("GET", `https://content.guardianapis.com/search?api-key=${this.secretkey}`, false)
    newRequest.send();
    var response = newRequest.response
    var jsonText = JSON.parse(response);
    this.headlines = jsonText.response.results;
  }

  exports.HeadlineRequester = HeadlineRequester
})(this);
