(function(exports) {
  function NewsListView(newslist = new NewsList) {
    this.newslist = newslist;
  }

  NewsListView.prototype.getHTML = function () {
    var articles = this.newslist.viewAll();
    var htmlString = "<div><ul>"
      for (var i = 0; i < articles.length; i++) {
        var string = articles[i].returnHeadLine();
        htmlString += `<li>${string}</li>`
      }
      return htmlString + "</ul></div>"
  };

  NewsListView.prototype.returnNewsListArticles = function () {
    return this.newslist.articles;
  };

  exports.NewsListView = NewsListView;
})(this);
