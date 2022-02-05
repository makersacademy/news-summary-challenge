const NewsModel = require("./newsModel");

class NewsView {
  constructor(model = new NewsModel()) {
    this.model = model
    this.mainContainer = document.querySelector('#main-container');
  }

  displayArticles(){
    const articles = this.model.getArticles();

    articles.forEach(article => {
      const div = document.createElement("div");
      div.className = 'article';
      div.textContent = article;
      this.mainContainer.append(div);
    })
  }
}

module.exports = NewsView;