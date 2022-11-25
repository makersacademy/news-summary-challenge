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
    const articlesFromAPI = articles.response.results;

    const topStoriesEl = document.createElement('h2');
    topStoriesEl.textContent = 'Top Stories'
    this.mainEl.append(topStoriesEl);

    articlesFromAPI.forEach(article => {
      const articleEl = document.createElement('div');
      articleEl.className = 'article';

      const articleTitle = document.createElement('h3');
      articleTitle.textContent = article.webTitle;
      const linkEl = document.createElement('a');
      linkEl.href = article.webUrl;
      linkEl.appendChild(articleTitle);
      articleEl.append(linkEl);
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