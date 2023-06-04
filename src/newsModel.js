class NewsModel {
  #news = null;

  getNews() {
    return this.#news;
  }

  setNews(news) {
    this.#news = news;
  }
}

module.exports = NewsModel;
