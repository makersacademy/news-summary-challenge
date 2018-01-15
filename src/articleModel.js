(function(exports) {
  ArticleID.prototype.init()

  var Article = function(url, headline, text, thumbnail) {
    this.id = ArticleID.prototype.getID();
    this.url = url;
    this.headline = headline;
    this.text = text;
    this.thumbnail = thumbnail;
    this.summary;
    //this.summary = this.createSummary()
    ArticleID.prototype.increment();
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

  Article.prototype.getID = function() {
    return article.id
  }

  exports.Article = Article
})(this);

function Stub(obj, functionName, newFunction) {
  this.obj = obj;
  this.functionName = functionName;
  this.originalFunction = obj[functionName];
  obj[functionName] = newFunction;
}

Stub.prototype.restore = function () {
  this.obj[this.functionName] = this.originalFunction;
}
