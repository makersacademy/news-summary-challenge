class newsModel {

  constructor() {
    this.news = []
  }

  getNews() {
    return this.news
  }

  addNews(article) {
    return this.news.push(article);
  }

  setNews(data) {
    this.news.push(data)
  }

}

module.exports = newsModel;