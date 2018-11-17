(function(exports) {
  function ArticleList() {
    this.articles = [];
  }

  ArticleList.prototype.add = function(apiData) {
    var results = apiData.response.results
      for (var i = 0; i < results.length; i++) {
        this.articles.push(new Article(results[i].webTitle, results[i].id, results[i].webUrl))
      }
  };

  ArticleList.prototype.getArticles = function() {
    return this.articles;
  }

  ArticleList.prototype.getUrlById = function(id) {
    for (var i = 0; i < this.articles.length; i++) {
      if (this.articles[i].id == id) {
        return this.articles[i].url;
      }
    }
  }

  exports.ArticleList = ArticleList;
})(this);
