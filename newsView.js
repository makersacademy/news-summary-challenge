const NewsModel = require('./newsModel');
const NewsApi = require('./newsApi');

class NewsView {

  constructor(model = new NewsModel, api = new NewsApi) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');

  }


  display() {
    this.#clear();

    let news = this.model.getItems();

    news.forEach(item => {
      const imageEl = document.createElement('img');
      imageEl.src = item.fields.thumbnail;
      const headlineEl = document.createElement('div');
      headlineEl.innerText = item.fields.headline;
      headlineEl.className = 'news';
      this.mainContainerEl.append(imageEl);
      this.mainContainerEl.append(headlineEl);
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
    let oldNews = document.querySelectorAll('div.news');
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