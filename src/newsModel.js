class newsModel {

  constructor() {
    this.news = []
  }

  getNews() {
    return this.news
  }

  getImage() {
    return this.newsImage
  }

  addNews(article) {
    return this.news.push(article);
  }

  setNews(data) {
    return this.news.push(data)
  }

  // setImage(image) {
  //   this.newsImage.push(image)
  // }

}

module.exports = newsModel;