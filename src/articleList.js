(function(exports) {
  function ArticleList() {
  this.articles = []
}

ArticleList.prototype = {

  getArticles: function() {
    return this.articles
  },

  addArticle: function(article) {
    this.articles.push(article)
  },
}

  exports.ArticleList = ArticleList
})(this);
