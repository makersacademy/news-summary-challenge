(function(exports) {

  function ArticleList() {
    this.articles = [];
    this.idCounter = 0;
  }

  ArticleList.prototype = {
    addArticle: function(article) {
      this.articles.push(article);
      article.id = this.idCounter++
    },

    showArticles: function() {
      return this.articles;
    }
  }

  exports.ArticleList = ArticleList
})(this)