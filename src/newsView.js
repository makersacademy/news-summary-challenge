class NewsView {
  constructor(model) {
    this.model = model;
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
}

module.exports = NewsView;