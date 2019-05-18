(function(exports) {
  function Article(text, link, pic){
    this.text = text;
    this.link = link;
    this.pic = pic;
    this.id = 0
  };

  Article.prototype.getText = function() {
    return this.text;
  };

  Article.prototype.getID = function() {
    return this.id;
  };

  Article.prototype.getLink = function() {
    return this.link;
  };

  Article.prototype.getPic = function() {
    return this.pic;
  };

  exports.Article = Article;
})(this);
