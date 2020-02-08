(function(exports) {
  function Article() {
    this.id = 0
    this.body = "a"
    this.title = "b"
  }
  exports.Article = Article
})(this);

Article.prototype.renderTitle = function() {
  return ("<h1>" + this.title + "</h1>")
}

Article.prototype.renderBody = function() {
  return ("<p>" + this.body + "</p>")
}
