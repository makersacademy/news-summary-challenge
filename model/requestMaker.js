(function(exports) {
  function RequestMaker(SecretKeyThing) {
    this.articles = [];
    this.key = SecretKeyThing;
  };

  RequestMaker.prototype.makeRequest = function() {
    var newRequest = new XMLHttpRequest();
    newRequest.open("GET", this.key, false);
    newRequest.send();
    var someJson = newRequest.responseText;
    var newJson = JSON.parse(someJson);
    this.articles = newJson.response.results;
  };

  exports.RequestMaker = RequestMaker;

})(this);
