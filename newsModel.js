class NewsModel {
  constructor() {
    this.news = [];
  }

  add(news) {
    this.news.push(news);
  }

  getNews(){
    return this.news;
  }
}

module.exports = NewsModel;