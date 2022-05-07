class NewsModel {
  constructor(model) {
    this.model = model;
    this.maincontainerEl = document.querySelector('#main-container');
  }

  displayNews() {

    const news = this.model.getNews();

    news.forEach(news => {
      const newsEl = document.createElement('div');
      newsEl.className = 'news';
      newsEl.innerText = news;
      this.maincontainerEl.append(newsEl);
    })
  }
}

module.exports = NewsModel;