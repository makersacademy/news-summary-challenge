class ArticlesView {
  constructor(model) {
    this.model = model;

    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayArticles() {
    const articles = this.model.getArticles();

    articles.forEach(article => {
      let articleEl = document.createElement('div');
      articleEl.className = 'article';
      this.mainContainerEl.append(articleEl)
      let articleHeadingEl = document.createElement('h3');
      articleHeadingEl.className = 'article-heading';
      articleHeadingEl.innerText = article.data;
      articleEl.append(articleHeadingEl);
    });
  }
}

module.exports = ArticlesView;
