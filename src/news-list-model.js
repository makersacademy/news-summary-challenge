(function(exports) {
  function NewsList() {
    this.newsItems = []
    this.newsId = 0
  };

  NewsList.prototype.uniqueId = function () {
    this.newsId += 1
    return this.newsId
  }

  NewsList.prototype.getNewsItems = function () {
    return this.newsItems
  }

  NewsList.prototype.addNewsItem = function(text) {
    var news = new News(text, this.uniqueId());
    this.newsItems.push(news)
  }

  exports.NewsList = NewsList
})(this)
