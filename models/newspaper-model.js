(function(exports) {
  function Newspaper() {
    this.listOfArticles = [];
  }

  Newspaper.prototype.addArticle = function(article) {
    this.listOfArticles.push(article);
  };

  Newspaper.prototype.returnHeadlineFromList = function(index) {
    return this.listOfArticles[index].displayHeadline();
  };

  // Newspaper.prototype.fetchArticles = function(callback) {
  //   //do all your loady stuff
  //   callback();
  // };

  exports.Newspaper = Newspaper;
})(this);
