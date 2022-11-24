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

    console.log(articles.response.results);

    const articlesFromAPI = articles.response.results;

    articlesFromAPI.forEach(article => {
      const articleEl = document.createElement('div');
      articleEl.className = 'article';
      const articleTitle = document.createElement('h2');
      articleTitle.textContent = article.webTitle;
      articleEl.append(articleTitle);
      const articleURL = document.createElement('a');
      articleURL.textContent = article.webUrl;
      articleEl.append(articleURL);
    
      this.mainEl.append(articleEl);
    });



    // articles.forEach(article => {
    //   const articleEl = document.createElement('div');
    //   articleEl.textContent = article;
    //   articleEl.className = 'article';
    //   this.mainEl.append(articleEl);
    // });
  }

  displayArticlesFromApi() {
    this.client.loadArticles(articleData => {
      this.model.setArticles(articleData);
      this.displayArticles();
    });
  }
}

module.exports = NewsView;