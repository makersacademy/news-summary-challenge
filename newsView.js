class NewsView {
  constructor(model) {
    this.model = model;
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
}

module.exports = NewsView;