class NewsModel {

  constructor() {
    this.news = [];
  }

  addNews(newsFromApi) {
    this.news = newsFromApi.response.results;
  }

  getNews() {
    return this.news;
  }
}

module.exports = NewsModel;