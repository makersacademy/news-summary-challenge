(function(exports) {
  function ArticleList() {
    this.articles = [];
  }

  ArticleList.prototype.add = function(apiData) {
    var results = apiData.response.results
      for (var i = 0; i < results.length; i++) {
        this.articles.push(new Article(results[i].webTitle, results[i].webUrl))
      }
  };

  ArticleList.prototype.getArticles = function() {
    return this.articles;
  }

  exports.ArticleList = ArticleList;
})(this);
