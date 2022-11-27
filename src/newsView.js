class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainEl = document.querySelector('#main');

    const submitButtonEl = document.querySelector('#news-search-submit');
    const searchBarEl = document.querySelector('#news-search')

    submitButtonEl.addEventListener('click', () => {
      const searchQuery = searchBarEl.value;

      this.client.searchArticles(searchQuery, articleData => {
        this.model.setArticles(articleData);
        document.querySelector('.stories-header').remove();
        this.displayArticles(searchQuery);
      });
    });
  }

  displayArticles(searchQuery) {
    document.querySelectorAll('.article').forEach(article => 
      article.remove());

    const articles = this.model.getArticles();

    console.log(articles)
    const articlesFromAPI = articles.response.results;

    const storiesEl = document.createElement('h2');
    if (searchQuery === undefined) {
      storiesEl.textContent = 'Top stories';
    } else {
      storiesEl.textContent = `Latest ${searchQuery} stories`;
    }
    
    storiesEl.className = 'stories-header'
    this.mainEl.append(storiesEl);

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

  displayArticlesFromApi() {
    this.client.loadArticles(articleData => {
      this.model.setArticles(articleData);
      this.displayArticles();
    });
  }

}

module.exports = NewsView;