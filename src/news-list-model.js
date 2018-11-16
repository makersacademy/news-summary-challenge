(function(exports) {
  function NewsList() {
    this.newsItems = []
  };

  NewsList.prototype.getNewsItems = function () {
    return this.newsItems
  }

  NewsList.prototype.addNewsItem = function(string) {
    news = new News(string)
    this.newsItems.push(news)
  }

  exports.NewsList = NewsList
})(this)
