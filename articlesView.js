class ArticlesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
  }

  setArticles(callback) {
    this.api.loadArticles((articles) => {
      this.model.setArticles(articles);
      callback();
    })
  }

  displayArticles() {
    const articles = this.model.articles;
    const main = document.querySelector('#main');
    for (let article of articles) {
      let div = document.createElement('div');
      div.className = "article";
      let img = document.createElement('img');
      img.src = article.fields.thumbnail;
      let headline = document.createElement('h2');
      headline.innerText = article.fields.headline;
      div.append(img, headline);
      main.append(div);
    }
  }

  clearArticles() {

  }
}

module.exports = ArticlesView;