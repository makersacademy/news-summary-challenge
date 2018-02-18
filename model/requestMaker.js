(function(exports) {
  function RequestMaker(SecretKeyThing, SummaryKey = null) {
    this.articles = [];
    this.key = SecretKeyThing;
    this.summaryKey = SummaryKey;
    this.summaries = [];
  };

  RequestMaker.prototype.makeRequest = function() {
    var newRequest = new XMLHttpRequest();
    newRequest.open("GET", this.key, false);
    newRequest.send();
    var newJson = JSON.parse(newRequest.responseText);
    this.articles = newJson.response.results;
  };

  RequestMaker.prototype.getSummaries = function() {
    var anotherRequest = new XMLHttpRequest();
    anotherRequest.open("GET", this.summaryKey, true);
    anotherRequest.send();
    var summaryObject = JSON.parse(anotherRequest.response);
    this.summaries = summaryObject.response.sentences;
  };

  exports.RequestMaker = RequestMaker;

})(this);
