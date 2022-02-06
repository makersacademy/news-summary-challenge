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
      const img = document.createElement('img')

      headline.textContent = article.webTitle;
      img.src = article.fields.thumbnail;

      div.appendChild(img);
      div.appendChild(headline);
      this.mainContainer.appendChild(div);
    })
  }
}

module.exports = NewsView;