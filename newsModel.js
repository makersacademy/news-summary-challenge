// file: newsModel.js

/**
 * class model for News Data
 */
class NewsModel {
  constructor() {
    this.news = [];
  }

  getData() {
    return this.news;
  }

  setNews(response) {
    this.news = response;
  }
}

module.exports = NewsModel;
