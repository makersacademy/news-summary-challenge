class ArticlesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayArticles() {
    // Clear articles before getting new articles
    // const articleDivs = document.querySelector('.article');
    // articleDivs.forEach((article) => {
    //   article.remove();
    // });

    // Get new articles
    const articles = this.model.getArticles();

    // Add div for each article
    articles.forEach((article) => {
      const div = document.createElement('div');
      div.innerText = article;
      div.className = 'article';
      this.mainContainerEl.append(div);
    });
  }
}

module.exports = ArticlesView;
