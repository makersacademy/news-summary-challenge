class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainEl = document.querySelector('#main');
  }

  displayArticles() {
    document.querySelectorAll('.article').forEach(article => 
      article.remove());
      
    const articles = this.model.getArticles();

    articles.forEach(article => {
      const articleEl = document.createElement('div');
      articleEl.textContent = article;
      articleEl.className = 'article';
      this.mainEl.append(articleEl);
    });
  }

  displayArticlesFromApi() {
    this.client.loadArticles(articleData => {
      this.model.setArticles(articleData);
      this.displayArticles();
    });
  }
}

module.exports = NewsView;