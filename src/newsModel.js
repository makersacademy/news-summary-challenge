class newsModel {

  constructor() {
    this.news = []
    this.newsImage = []
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

  setImage(image) {
    this.newsImage.push(image)
  }

}

module.exports = newsModel;