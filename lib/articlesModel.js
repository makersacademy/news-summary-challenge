class ArticlesModel {
  constructor() {
    this._articlesArray = []
  }

  addArticle = (article) => this._articlesArray.push(article);

  getArticles = () => this._articlesArray;
}

module.exports = ArticlesModel;