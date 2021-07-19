(function(exports){

  class NewsListView {
    constructor(newslist) {
      this.list = newslist;
    }
    getList() {
      return this.list;
    }
    listNews() {
      var allNews = this.list.getAllNews();
      var listInHtml = allNews.map(function (news) {
        return "<li><div>" + news.headline + "</div></li>";
      });
      return "<ul>" + listInHtml.join('') + "</ul>";
    }
  }

  exports.NewsListView = NewsListView;

})(this);