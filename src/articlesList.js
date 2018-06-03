(function(exports) {

  function ArticlesList() {
    this.list = [];
  }

  ArticlesList.prototype.addArticles = function(data) {
    var dataResults = data.response.results;
    var list = []
    dataResults.forEach(function(article) {
      list.push(new Article(article.webTitle, article.fields.thumbnail, article.webUrl))
    });
    this.list = list;
  }

exports.ArticlesList = ArticlesList;
})(this)
