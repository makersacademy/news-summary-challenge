class ArticleView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
    const newsButtonEl = document.querySelector('#pull-news');

    newsButtonEl.addEventListener('click', () => {
      this.display()
    })
  }

  display() {
    let headlines = this.model.getArticleHeadlines();
    // console.log(headlines())
    const headlineEl = document.querySelector('#headline');

    headlines.forEach((headline) => {
      const headlineEl = document.createElement('h3')
      headlineEl.textContent = headline
      headlineEl.id = 'headline'
      this.mainContainerEl.append(headlineEl)
    })
  }

  displayArticlesFromApi() {
    this.api.getArticleInfo((articles) => {
      this.model.setArticleInfo(articles);
      this.display();
    })
  }
}

module.exports = ArticleView;