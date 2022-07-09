class NewsView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayNews() {
    const articles = this.model.getNews();

    articles.forEach(article => {
      const newsEl = document.createElement('div');
      newsEl.innerText = article;
      newsEl.className = 'news';
      this.mainContainerEl.append(newsEl);
    });
  }

  displayNewsFromApi() {
    this.api.loadData(data => {
      this.model.setArticles(data);
      this.displayNews();
    });
  }
}

module.exports = NewsView;