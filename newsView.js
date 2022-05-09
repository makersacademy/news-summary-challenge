const NewsModel = require('./newsModel');
const NewsApi = require('./newsApi');

class NewsView {

  constructor(model = new NewsModel, api = new NewsApi) {
    this.model = model;
    this.api = api;
    this.listEl = document.querySelector('ul');
    this.searchButtonEl = document.querySelector('#search-button');
    this.searchFieldEl = document.querySelector('#search-field');

    this.searchButtonEl.addEventListener('click', () => {
      this.api.setUrl(this.searchFieldEl.value);
      this.fetch_then_display();
    })
  }

  display() {
    this.#clear();

    let news = this.model.getItems();

    news.forEach(item => {
      const imageEl = document.createElement('img');
      imageEl.src = item.fields.thumbnail;
      const headlineEl = document.createElement('a');
      headlineEl.innerText = item.fields.headline;
      headlineEl.href = item.webUrl;
      this.listEl.append(imageEl);
      this.listEl.append(headlineEl);
    })
  }

  fetch_then_display() {
    this.api.getNews((data) => {
      let article_array = data.response.results;
      this.model.setItems(article_array);
      this.display();
    })

  }

  #clear() {
    let oldNews = document.querySelectorAll('a');
    oldNews.forEach((article) => {
      article.remove()
    })
    let oldImages = document.querySelectorAll('img');
    oldImages.forEach((image) => {
      image.remove()
    })
  }
}

module.exports = NewsView