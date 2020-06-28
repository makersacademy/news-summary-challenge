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

  NewsFeed.prototype.getArticleByID = function(num) {
    var arr = this.getArticles()
    for(var i=0;i<arr.length;i++) {
      if (arr[2].getID() == num) {
        return arr[2]
      }
    }
  }

  exports.NewsFeed = NewsFeed;
})(this)
