(function(exports) {
  function Article(title, body) {
    this.title = title;
    this.body = body;
  }

  Article.prototype.getTitle = function() {
    return this.title;
  }

  Article.prototype.getBody = function() {
    return this.body;
  }

  Article.prototype.addId = function(id) {
    this.id = id;
  }

  Article.prototype.getId = function() {
    return this.id
  }

  exports.Article = Article;
})(this);
