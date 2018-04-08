(function(exports) {
  var REQUEST_URL = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/news?show-fields=thumbnail'

  function ArticleRequest() {
    this.response = null
  };

  ArticleRequest.prototype.getNews = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', REQUEST_URL);
    xhr.send();
    var response = JSON.parse(xhr.responseText)
    this.response = response
  }

    exports.ArticleRequest = ArticleRequest;
})(this);

  function ArticleRequest() {
    this.response = null
    this.url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/news?show-fields=body'
  };

  ArticleRequest.prototype.getNews = function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", this.url);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        console.log(response.response.results);
      }
    };
    xhr.send();
  };
