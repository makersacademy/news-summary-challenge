class newsModel {
  constructor() {
    this.news = [];
  }

  getNews() {
    return this.news;
  }

  addNews(headline) {
    this.news.push(headline);
  }

  setNews(array) {
    this.news = array;
  }
}

module.exports = newsModel;
