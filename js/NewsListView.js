(function(exports) {
  function NewsListView(newsList) {
    this.newsList = newsList
  }

  NewsListView.prototype.displayNews = function () {
    newsString = "";
    this.newslist.allNews.forEach(function(news) {
      var template = [
        "<div class='column is-one-quarter'>",
        "<div class='card is-4by3'>",
        "<div class='card-content'>",
        "<a href='",
        news.displayWebUrl(),
        "'>",
        news.displayWebTitle(),
        "</a>",
        "</div>",
        "</div>",
        "</div>"
      ];
      newsString += template.join("");
    });
    return newsString;
    }

    exports.NewsListView = NewsListView

})(this);
