(function(exports) {
  function RequestMaker() {
    this.articles = [];
    this.key = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/books?show-fields=thumbnail";
    // this.summaryKey =
    // this.summary = [];
  };

  RequestMaker.prototype.makeRequest = function() {
    var newRequest = new XMLHttpRequest();
    newRequest.open("GET", this.key, false);
    newRequest.send();
    var newJson = JSON.parse(newRequest.responseText);
    this.articles = newJson.response.results;
  };

  exports.RequestMaker = RequestMaker;

})(this);
