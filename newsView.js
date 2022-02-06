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
      const headline = document.createElement('h1');
      const img = document.createElement('img')
      const link = document.createElement('a');
      link.setAttribute('href', article.webUrl);

      headline.textContent = article.webTitle;
      img.src = article.fields.thumbnail;

      div.appendChild(img);
      link.appendChild(headline)
      div.appendChild(link);
      this.mainContainer.appendChild(div);
    })
  }
}

module.exports = NewsView;