(function(exports) {
  function Newspaper() {
    this.listOfArticles = [];
  }

  Newspaper.prototype.addArticle = function(article) {
    this.listOfArticles.push(article);
  };

  exports.Newspaper = Newspaper;
})(this);
