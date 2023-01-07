class NewsModel {

  constructor() {
    this.news = null;
  }

  addNews(newsFromApi) {
    console.log(newsFromApi)
    this.news = newsFromApi.response.results;
  }

  getNews() {
    return this.news;
  }
}

module.exports = NewsModel;