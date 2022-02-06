const NewsModel = require("./newsModel");

class NewsView {
  constructor(model, api) {
    this.model = model;
    this.api = api
    this.mainContainer = document.querySelector('#main-container');
  }

  displayArticles(){
    const articles = this.model.getArticles();

    articles.forEach(article => {
      const div = document.createElement("div");
      div.className = 'article';
      const headline = document.createElement('h2');
      headline.textContent = article;
      div.appendChild(headline);
      this.mainContainer.appendChild(div);
    })
  }
}

module.exports = NewsView;