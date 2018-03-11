(function(exports) {
  function HeadlineRequestMaker() {
    this.articles = [];
    this.key = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/books?show-fields=thumbnail";
  };

  HeadlineRequestMaker.prototype.makeRequest = function() {
    var newRequest = new XMLHttpRequest();
    newRequest.open("GET",this.key, false);
    newRequest.send();
    var newJson = JSON.parse(newRequest.responseText);
    this.articles = newJson.response.results;
  };

  exports.HeadlineRequestMaker = HeadlineRequestMaker;

})(this);

// newRequest = new XMLHttpRequest();
// newRequest.open("GET","http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/books?show-fields=thumbnail", false);
// newRequest.send();
// newJson = JSON.parse(newRequest.responseText);
