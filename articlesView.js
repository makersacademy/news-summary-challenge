class ArticlesView {
  constructor(model) {
    this.model = model;

    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayArticles() {
    const articles = this.model.getArticles();

    articles.forEach(article => {
      // console.log(article.fields.headline);    // Log headline for each article
      
      // Create article element
      let articleEl = document.createElement('div');
      articleEl.className = 'article';
      this.mainContainerEl.append(articleEl);

      // Create article image
      let articleImageEl = document.createElement('img');
      articleImageEl.className = 'article-image';
      // articleImageEl.src = article.thumbnail;   // Local data
      articleImageEl.src = article.fields.thumbnail;   // API data
      articleEl.append(articleImageEl);

      // Create article headline
      let articleHeadlineEl = document.createElement('h3');
      articleHeadlineEl.className = 'article-headline';
      articleEl.append(articleHeadlineEl);
      
      // Create article headline link
      let articleLinkEl = document.createElement('a');
      articleLinkEl.href = article.webUrl;
      // articleLinkEl.innerText = article.headline;    // Local data
      articleLinkEl.innerText = article.fields.headline;   // API data
      articleHeadlineEl.append(articleLinkEl);
    });
  }
}

module.exports = ArticlesView;
