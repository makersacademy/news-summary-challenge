(function(global) {
  function TodaysNews(articles) {
    this._articles = articles;
  }

  TodaysNews.prototype = {
    constructor: TodaysNews,
    articles: function() {
      return this._articles;
    }
  };

  global.TodaysNews = TodaysNews;
})(this);
