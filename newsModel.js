class NewsModel {
  constructor() {
    this.news = [];
  }

  add(news) {
    news.forEach(item => {
      this.news.push(item);
    })
  }

  getNews(){
    return this.news;
  }
}

module.exports = NewsModel;