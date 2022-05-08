class newsModel {

  constructor() {
    this.news = [];
    this.searchResults = []
  }

  getNews() {
    return this.news;
  }

  getResults() {
    return this.searchResults
  }

  addNews(article) {
    return this.news.push(article);
  }

  setNews(data) {
    this.news = data
  }

  // setImage(image) {
  //   this.newsImage.push(image)
  // }

}

module.exports = newsModel;