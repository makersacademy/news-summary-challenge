(function(exports){

  class NewsList {
    constructor() {
      this.allNews = [];
    }
    getAllNews(news) {
      return this.allNews;
    }
    addNews(news) {
      this.allNews.push(news);
    }
  }

  exports.NewsList = NewsList;

})(this);