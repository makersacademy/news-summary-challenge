class ArticlesView {
  constructor(model) {
    this.model = model;

    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayArticles() {
    const articles = this.model.getArticles();

    articles.forEach(article => {
      // console.log(article.fields.headline);  // log headline for each article
      let articleEl = document.createElement('div');
      articleEl.className = 'article';
      this.mainContainerEl.append(articleEl)
      let articleHeadingEl = document.createElement('h3');
      articleHeadingEl.className = 'article-heading';
      articleHeadingEl.innerText = article.fields.headline;
      articleEl.append(articleHeadingEl);
    });
  }
}

module.exports = ArticlesView;
