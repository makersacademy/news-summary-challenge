(function(exports) {
  var List = function() {
    this.articles = []
  }

  List.prototype.addArticle = function(article) {
    this.articles.push(article)
  }

  exports.List = List;
})(this)
