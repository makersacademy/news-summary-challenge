(function(exports) {
  function ArticleList() {
    this.articles = [];
  }

  ArticleList.prototype = {
    addArticle: function(article) {
      this.articles.push(article);
    },
    showArticles: function() {
      return this.articles;
    }
  }

  exports.ArticleList = ArticleList
})(this)