(function(exports) {
  function NewsListView(newslist) {
    this.newslist = newslist
  }

  NewsListView.prototype.NewsListToHTML = function() {
    var allnews = this.newslist.ReturnAllNews();
    var html = []
    allnews.forEach(function(news) {
      var newsArticle = new SingleNewsView(news)
      html.push('<div><li>' + newsArticle.DisplaySingleNewsHeader() + '</li></div>')
    })
    return '<ul>' + html.join('') + '</ul>'
  }

  exports.NewsListView = NewsListView
})(this);
