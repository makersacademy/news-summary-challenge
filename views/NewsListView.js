var NEWSLISTVIEWMODULE = (function(exports) {
  exports.NewsListView = NewsListView;
  function NewsListView(news) {
    this.news = news;
  };

  NewsListView.prototype.HTMLNewsListRepresentation = function() {
    var htmlString = `<ul><li><div id='0'>`;
    for (var i = 0; i < this.news.length; i++) {
      var news = this.news[i];
      var singleNews = new SingleNewsView(news);
      htmlString += singleNews.HTMLSingleNewsHeadlineRepresentation();
      if (i !== this.news.length - 1) {
        htmlString += `</div></li><li><div id='${i+1}'>`;
      }
    }
    htmlString += '</div></li></ul>';
    return htmlString;
  };

  return exports;
})(this);
