class ArticleView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    const newsButtonEl = document.querySelector('#pull-news');

    newsButtonEl.addEventListener('click', () => {
      this.api.getArticleInfo((articleData) => {
        console.log(articleData);
        this.display(articleData);
      });
    })
  }

  display() {
    const headlines = this.model.getArticleHeadlines();
    const headlineEl = document.querySelector('#headline');

    headlines.forEach((headline) => {
      headlineEl.textContent = headline
    })
  }
}

module.exports = ArticleView;