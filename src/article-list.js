(function(exports) {
  function ArticleList() {
    this.articles = [];
    this.id = 0;
  }

  ArticleList.prototype.add = function(text) {
    this.articles.push(new Article(text, this.id));
    this.id += 1;
  };

  ArticleList.prototype.getArticles = function() {
    return this.articles;
  };

  ArticleList.prototype.getArticleById = function(id) {
    for (var i = 0; i < this.articles.length; i++) {
      if (this.articles[i].id == id) {
        return this.articles[i].text;
      }
    }
  };

  exports.ArticleList = ArticleList;
})(this);
