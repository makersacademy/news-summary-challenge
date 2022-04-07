class ArticlesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');

    document.querySelector('#search-content-btn').addEventListener('click', () => {
      this.model.reset();
      
      const query = document.querySelector('#search-content-input').value;
      console.log('Query: ', query);

      this.api.loadArticles((articles) => {
        let articlesList = articles.response.results;
        console.log(articlesList);    // Log list of articles
        this.model.setArticles(articlesList);
        this.displayArticles();
        // location.reload();
      }, query);
    });
  }

  displayArticles() {
    document.querySelectorAll('div.article').forEach(element => {
      element.remove();
    });

    const articles = this.model.getArticles();

    articles.forEach(article => {
      // console.log(article.fields.headline);    // Log headline for each article
      
      // Create article element
      const articleEl = document.createElement('div');
      articleEl.className = 'article';
      this.mainContainerEl.append(articleEl);

      // Create article headline link
      const articleLinkEl = document.createElement('a');
      articleLinkEl.href = article.webUrl;
      articleEl.append(articleLinkEl);
      
      // Create article image
      const articleImageEl = document.createElement('img');
      articleImageEl.className = 'article-image';
      articleImageEl.src = article.fields.thumbnail;
      articleLinkEl.append(articleImageEl);
      
      // Create article headline
      const articleHeadlineEl = document.createElement('h3');
      articleHeadlineEl.className = 'article-headline';
      articleHeadlineEl.innerText = article.fields.headline;
      articleLinkEl.append(articleHeadlineEl);
    });
  }
}

module.exports = ArticlesView;
