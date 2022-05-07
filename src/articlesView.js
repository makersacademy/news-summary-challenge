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

      const imgBorderEl = document.createElement('div');
      imgBorderEl.classList.add('border');

      const pictureEl = document.createElement('img');
      pictureEl.classList.add('pic');
      pictureEl.src = article.image;
      imgBorderEl.append(pictureEl);

      const nameEl = document.createElement('a');
      nameEl.classList.add('title');
      nameEl.href = article.url;
      nameEl.innerText = article.headline;

      articleEl.append(imgBorderEl, nameEl);
      
      this.mainContainerEl.append(articleEl);
    })
  }
}

module.exports = ArticlesView;