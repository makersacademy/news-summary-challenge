class NewsModel {
  #news = [];

  getNews() {
    return this.#news;
  }

  setNews(news) {
    this.#news = news;
  }
}

module.exports = NewsModel;
