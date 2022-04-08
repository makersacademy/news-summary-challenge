class NewsView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');

    this.api.loadArticles((data) => {
      this.model.addHeadlines(data.response.results);
      this.createHeadlines();
    })
  }

  createHeadlines() {
    this.model.getHeadlines().forEach((headline) => {
      this._addArticleEl();
      this._addImage(headline.fields.thumbnail);
      this._addHeadline(headline.webTitle, headline.webUrl);
    });
  }

  _addArticleEl() {
    const articleEl = document.createElement('article');
    articleEl.className = 'article-container';
    this.mainContainerEl.append(articleEl);
  }

  _addHeadline(headline, url) {
    const headlineEl = document.createElement('h2');
    headlineEl.innerText = headline;
    headlineEl.className = 'headline';

    const urlEl = document.createElement('a');
    urlEl.href = url;
    urlEl.append(headlineEl);
    this.mainContainerEl.lastElementChild.append(urlEl);
  }
  
  _addImage(imgSrc) {
    const imgEl = document.createElement('img');
    imgEl.src = imgSrc;
    imgEl.className = 'image';
    this.mainContainerEl.lastElementChild.append(imgEl);
  }
}

module.exports = NewsView;