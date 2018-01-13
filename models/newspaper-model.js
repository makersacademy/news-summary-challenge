(function(exports) {
  function Newspaper() {
    this.listOfArticles = [];
  }

  Newspaper.prototype.addArticle = function(article) {
    this.listOfArticles.push(article);
  };

  Newspaper.prototype.returnAllArticles = function() {
    return this.listOfArticles;
  };

  exports.Newspaper = Newspaper;
})(this);
