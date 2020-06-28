(function(exports) {
  var Article = function(url, headline, text, thumbnail) {
    this.id;
    this.url = url;
    this.headline = headline;
    this.text = text;
    this.thumbnail = thumbnail;
    this.summary;
  }

  Article.prototype.getUrl = function() {
    return this.url
  }

  Article.prototype.getHeadline = function() {
    return this.headline
  }

  Article.prototype.getText = function() {
    return this.text
  }

  Article.prototype.getThumbnail = function() {
    return this.thumbnail
  }

  Article.prototype.setSummary = function(summary) {
    this.summary = summary
  }

  Article.prototype.getSummary = function() {
    return this.summary
  }

  exports.Article = Article
})(this);
