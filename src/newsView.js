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

    console.log(articles)
    const articlesFromAPI = articles.response.results;

    const topStoriesEl = document.createElement('h2');
    topStoriesEl.textContent = 'Top Stories'
    this.mainEl.append(topStoriesEl);

    articlesFromAPI.forEach(article => {
      const articleEl = document.createElement('div');
      articleEl.className = 'article';

      const articleThumbnail = document.createElement('img');
      articleThumbnail.src = article.fields.thumbnail;

      const articleTitle = document.createElement('h3');
      articleTitle.textContent = article.webTitle;
      const linkEl = document.createElement('a');
      linkEl.href = article.webUrl;
      
      linkEl.appendChild(articleTitle);
      articleEl.appendChild(articleThumbnail);
      articleEl.append(linkEl);
      this.mainEl.append(articleEl);
    });
  }

  displaySearchArticles() {
    document.querySelectorAll('.article').forEach(article => 
      article.remove());

      const searchArticles = this.model.getSearchArticles();

      const articlesFromApiSearch = searchArticles.response.results;

      const searchStoriesEl = document.createElement('h2');
      searchStoriesEl.textContent = 'Your Stories'
      this.mainEl.append(searchStoriesEl);
  
      articlesFromApiSearch.forEach(article => {
        const articleEl = document.createElement('div');
        articleEl.className = 'article';
  
        const articleThumbnail = document.createElement('img');
        articleThumbnail.src = article.fields.thumbnail;
  
        const articleTitle = document.createElement('h3');
        articleTitle.textContent = article.webTitle;
        const linkEl = document.createElement('a');
        linkEl.href = article.webUrl;
        
        linkEl.appendChild(articleTitle);
        articleEl.appendChild(articleThumbnail);
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

  displayArticlesFromApiSearch(searchQuery) {
    this.client.searchArticles(articleData => {
      this.model.setQueryArticles(articleData);
      this.displaySearchArticles();
    })
   
  }
}

module.exports = NewsView;