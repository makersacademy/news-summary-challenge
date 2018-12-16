(function(exports) {
  function NewsListView(newsList) {
    this.newsList = newsList
  }

  NewsListView.prototype.display = function () {
    return [
      "<br>",
      "<center>",
      "<h2>",
      "<font face='courier'>",
      "CCN Breaking News",
      "</h2>",
      "<br>",
      "<br>",
      "<br>",
        this.newsList.newsBox.map(function(news) {
          return [
            "<div>",
            "<h2>",
            "<a href='#news/" + news.id + "'>" + news.headline() + "</a>",
            "</h2>",
            "</div>"
          ].join("")
        }).join(""),
        "</font>",
        "</center>"
      ].join("")
    }

    exports.NewsListView = NewsListView

})(this);
