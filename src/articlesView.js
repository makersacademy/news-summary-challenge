const ArticlesModel = require("./articlesModel");

class ArticlesView {
  constructor(model = new ArticlesModel()) {
    this.model = model;

    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayArticles() {
    this.model.getArticles().forEach(article => {
      const articleEl = document.createElement('div');
      articleEl.classList.add('article');
      articleEl.innerText = article.headline;
      this.mainContainerEl.append(articleEl);
    })
  }
}

module.exports = ArticlesView;