class ArticlesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayArticlesFromApi() {
    this.api.loadArticles((responseData) => {
      responseData.response.results.forEach(articleData => {
        const article = this.model.convertData(articleData);
        this.model.addArticle(article);
      });
      this.#displayArticles();
    });
  }

  // private methods

  #displayArticles() {
    this.model.getArticles().forEach(article => {
      const articleEl = document.createElement('div');
      articleEl.classList.add('article');
      articleEl.innerText = article.headline;
      this.mainContainerEl.append(articleEl);
    })
  }
}

module.exports = ArticlesView;