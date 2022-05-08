class ArticlesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    this.mainContainerEl = document.querySelector('#main-container');
    this.searchFieldEl = document.querySelector('#search-field');
    this.searchButtonEl = document.querySelector('#search-button');

    this.searchButtonEl.addEventListener('click', () => {
      this.model.reset();
      this.#emptyDisplay();
      this.displayArticlesFromApi(this.searchFieldEl.value);
    });
  }

  displayArticlesFromApi(search) {
    this.api.loadArticles((responseData => {
      responseData.response.results.forEach(articleData => {
        const article = this.model.convertData(articleData);
        this.model.addArticle(article);
      });
      this.#displayArticles();
    }), search);
  }

  // private methods

  #displayArticles() {
    const articles = this.model.getArticles();
    if (articles.length === 0) {
      this.#noResults();
    } else {
      articles.forEach(article => {
        const articleEl = document.createElement('div');
        articleEl.classList.add('article');

        const imgBorderEl = document.createElement('div');
        imgBorderEl.classList.add('border');

        const pictureEl = document.createElement('img');
        pictureEl.classList.add('pic');
        pictureEl.src = article.image;
        imgBorderEl.append(pictureEl);

        const nameEl = document.createElement('a');
        nameEl.classList.add('title');
        nameEl.href = article.url;
        nameEl.innerText = article.headline;

        articleEl.append(imgBorderEl, nameEl);
        
        this.mainContainerEl.append(articleEl);
      });
    }
  }

  #emptyDisplay() {
    document.querySelectorAll('div.article').forEach(article => {
      article.remove();
    });
    document.querySelectorAll('div.message').forEach(message => {
      message.remove();
    })
  }

  #noResults() {
    const messageEl = document.createElement('div');
      messageEl.classList.add('message');
      messageEl.innerText = 'No results matching your search';
      this.mainContainerEl.append(messageEl);
  }
}

module.exports = ArticlesView;