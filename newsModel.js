class NewsModel {

  constructor() {
    this.news = [];
  }

  addNews(newsFromApi) {
    this.news = newsFromApi;
  }

  getNews() {
    return this.news;
  }
}

module.exports = NewsModel;