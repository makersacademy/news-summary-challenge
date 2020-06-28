(function(exports) {
  function ArticleList() {
    this.articleArray = [];
    this.articleId = 0;
  }

  ArticleList.prototype.createList = function(articleListJSON) {
    articleListJSON.forEach(articleJSON => {
      const article = new ArticleModel(articleJSON, this.articleId);
      this.articleArray.push(article)
      this.articleId++;
    })
  }

  ArticleList.prototype.getList = function() {
    return this.articleArray;
  }

  exports.ArticleList = ArticleList;
})(this);
