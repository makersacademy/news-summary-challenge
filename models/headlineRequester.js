"use strict";

(function(exports) {
  function HeadlineRequester(secretkey, headlines = null) {
    this.secretkey = secretkey;
    this.headlines = headlines;
  }

  HeadlineRequester.prototype.makeRequest = function() {
    var newRequest = new XMLHttpRequest();
    newRequest.open("GET", `https://content.guardianapis.com/search?section=politics&show-fields=thumbnail&api-key=${this.secretkey}`, false)
    newRequest.send();
    var response = newRequest.response
    var jsonText = JSON.parse(response);
    this.headlines = jsonText.response.results;
  };

  HeadlineRequester.prototype.findHeadlineById = function(searchterm) {
    var found = this.headlines.find(function(headline) {
      if (headline.id === searchterm) { return headline };
    });
    return found
  };

  exports.HeadlineRequester = HeadlineRequester
})(this);
