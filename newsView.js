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
      const outputEl = document.createElement('div');
      outputEl.innerText = item.fields.headline;
      outputEl.className = 'news';
      this.mainContainerEl.append(outputEl);
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
  }

}

module.exports = NewsView