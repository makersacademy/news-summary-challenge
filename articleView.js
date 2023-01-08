class ArticleView {
  constructor(client, model) {
    this.client = client;
    this.model = model;
    this.headlinesEl = document.querySelector('.headlines');

    this.searchInputEl = document.querySelector('#search-bar-input');
    this.searchButtonEl = document.querySelector('#search-button');

    this.searchButtonEl.addEventListener('click', () => this.#onSearchButtonClick());
    this.searchInputEl.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.#onSearchButtonClick();
      }
    });
  }

  displayArticles() {
    this.#removeArticles();

    this.model.getArticles().forEach((article) => {
      const articleEl = this.#createArticleEl(article);
      this.headlinesEl.append(articleEl);
    });
  }

  fetchArticlesFromApi(date, query, errorCallback = () => {}) {
    this.client.fetchArticles(date, query, (data) => {
      const articles = this.#parseApiData(data);
      this.model.setArticles(articles);
      this.displayArticles();
    }, (error) => {
      this.displayError(error);
      errorCallback(error);
    });
  }

  displayError(error) {
    const mainContainerEl = document.querySelector('#main-container');
    mainContainerEl.replaceChildren('');

    const errorEl = document.createElement('div');
    errorEl.className = 'error'
    errorEl.textContent = error.name;
    mainContainerEl.append(errorEl);

    const errorMessageEl = document.createElement('div');
    errorMessageEl.className = 'error-message';
    errorMessageEl.textContent = error.message;
    mainContainerEl.append(errorMessageEl);
  }

  #createArticleEl(article) {
    const articleEl = document.createElement('div');
    articleEl.className = 'article';

    const articleImgEl = document.createElement('img');
    articleImgEl.className = 'center';
    articleImgEl.src = article.thumbnail;
    articleEl.append(articleImgEl);

    const articleHeadlineEl = document.createElement('p');
    articleHeadlineEl.className = 'headline center';
    articleHeadlineEl.innerHTML = `<a href="${article.webUrl}">${article.headline}</a>`;
    articleEl.append(articleHeadlineEl);

    return articleEl;
  }

  #removeArticles() {
    this.headlinesEl.querySelectorAll('.article').forEach((article) => {
      article.remove();
    });
  }

  #parseApiData(data) {
    return data.response.results.map((result) => {
      return {
        headline: result.fields.headline,
        thumbnail: result.fields.thumbnail,
        webUrl: result.webUrl
      };
    });
  }

  #onSearchButtonClick() {
    const query = this.searchInputEl.value;
    const date = query === '' ? new Date().toJSON().slice(0, 10) : '';
    this.fetchArticlesFromApi(date, query);
  }
}

module.exports = ArticleView;
