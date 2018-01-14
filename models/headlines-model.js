(function(exports) {
function HeadlineList() {
  this.articles = [];
};

HeadlineList.prototype.addArticle = function(article) {
    this.articles.push(article);
};

HeadlineList.prototype.createArticle = function(headline) {
  article = new Article(headline);
  this.addArticle(article);
};

  exports.HeadlineList = HeadlineList;
})(this);
