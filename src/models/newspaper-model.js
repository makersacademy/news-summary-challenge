(function(exports) {
  function Newspaper() {
    this.listOfArticles = [];
  }

  Newspaper.prototype.addArticle = function(article) {
    this.listOfArticles.push(article);
  };

  Newspaper.prototype.fetchArticles = function(callback) {
    var newsRequest = new XMLHttpRequest();
    var self = this;

    newsRequest.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search");
    newsRequest.onload = function() {
      if (newsRequest.status >= 200 && newsRequest.status < 400) {
        var data = JSON.parse(newsRequest.responseText)
        data.response.results.forEach(function(result) {
          self.addArticle(new Article(result.webTitle, result.webUrl));
        });
        if(callback) {
          callback();
        }
      } else {
        //TODO handle error here
      }
    };
    newsRequest.send();
  };

  exports.Newspaper = Newspaper;
})(this);
