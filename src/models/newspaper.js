(function(exports) {
  function Newspaper() {
    this.articleList = [];
  };

  Newspaper.prototype.addArticle = function(article) {
    this.articleList.push(article);
  };

  exports.newspaper = new Newspaper;
})(this);
