function NewsController() {

}

NewsController.prototype.storeResponse = function(apiResponse) {
  this.apiResponse = apiResponse;
}

NewsController.prototype.processResponse = function() {
  this.apiResponse.response.results.forEach(function(result) {
    var headline = result.webTitle;
    var url = result.webUrl;
    var article = new Article(headline, url);
    newspaper.addArticle(article);
  });
}

NewsController.prototype.callAPI = function(callback) {
  var self = this;
  var apiURL = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk-news';
  var request = new XMLHttpRequest();
  request.open('GET', apiURL);
  request.responseType = 'json';
  request.send();
  request.onload = function load() {
    self.storeResponse(request.response);
    self.processResponse();
    callback();
  };
}
