class ArticleView {
  constructor(client, model) {
    this.client = client;
    this.model = model;
  }

  displayArticles() {
    const headlinesEl = document.querySelector('.headlines');

    this.model.getArticles().forEach((article) => {
      const articleEl = this.#createArticleEl(article);
      headlinesEl.append(articleEl);
    });
  }

  #createArticleEl(article) {
    const articleEl = document.createElement('div');
    articleEl.className = 'article';

    const articleImgEl = document.createElement('img');
    articleImgEl.src = article.thumbnail;
    articleEl.append(articleImgEl);

    const articleHeadlineEl = document.createElement('p');
    articleHeadlineEl.className = 'headline';
    articleHeadlineEl.innerHTML = `<a href="${article.webUrl}">${article.headline}</a>`;
    articleEl.append(articleHeadlineEl);

    return articleEl;
  }
}

module.exports = ArticleView;
