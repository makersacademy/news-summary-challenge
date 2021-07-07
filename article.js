(function(exports) {
  function Article() {
    this.id = 0
    this.body = "a"
    this.title = "b"
    this.number = 0
    this.thumbnail = 2
  }
  exports.Article = Article
})(this);

Article.prototype.renderTitle = function() {
  return ("<h3>" + this.title + "</h3>")
}

Article.prototype.renderBody = function() {
  return ("<p>" + this.body + "</p>")
}
