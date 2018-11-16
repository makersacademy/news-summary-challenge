(function(exports) {
  function NewsListView(newsList) {
    this.newsList = newsList
  }

  NewsListView.prototype.renderNewsItems = function() {
    list = this.newsList.newsItems.map(
      newsItem => `<li><div>${newsItem.displayText()}</div></li>`).join("")
      return `<ul>${list}</ul>`
  }

  exports.NewsListView = NewsListView;
})(this)
