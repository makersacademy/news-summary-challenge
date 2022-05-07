class newsView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayNews() {
    const oldNews = document.querySelectorAll('div.news');
    oldNews.forEach((headline) => {
      headline.remove();
    })
    let news = this.model.getNews();
    news.forEach((headline) => {
      const newsEl = document.createElement('div');
      newsEl.innerText = headline.webTitle;
      newsEl.className = 'news';
      this.mainContainerEl.append(newsEl);
    })
  }

  displayNewsFromApi() {
    this.api.fetchNews((data) => {
      this.model.setNews(data);
      this.displayNews();
    })
  }

}

module.exports = newsView;
