(function(exports) {
  var NewsFeed = function() {
    this.articles = []
  }

  NewsFeed.prototype.addArticle = function(article) {
    this.articles.push(article)
  }

  NewsFeed.prototype.getArticles = function() {
    return this.articles
  }

  NewsFeed.prototype.createAndAddArticle = function(url, headline, text, thumbnail) {
    var article = new Article(url, headline, text, thumbnail)
    this.addArticle(article)
  }

  exports.List = NewsFeed;
})(this)
