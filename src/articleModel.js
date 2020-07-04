(function(exports) {
  ArticleID.prototype.init()

  var Article = function(url, headline, thumbnail) {
    this.id = ArticleID.prototype.getID();
    this.url = url;
    this.headline = headline;
    this.thumbnail = thumbnail;
    this.summary;
    ArticleID.prototype.increment();
  }

  Article.prototype.getUrl = function() {
    return this.url
  }

  Article.prototype.getHeadline = function() {
    return this.headline
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

  Article.prototype.createSummary = function(x = new XMLHttpRequest()) {
    var xhr = x
    var article = this
    var aylienURL = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + article.getUrl()
    xhr.open('GET', aylienURL)
    xhr.onload = function() {
      if(xhr.status === 200) {
        var summary = JSON.parse(xhr.responseText)
        article.setSummary(summary['text'])
      } else {
        alert('Summary Request Failed. Status: ' + xhr.status + 'Article ID: ' + article.getID())
      }
    }
    xhr.send()
  }

  Article.prototype.getID = function() {
    return this.id
  }

  exports.Article = Article
})(this);
