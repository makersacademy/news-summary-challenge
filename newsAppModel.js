class newsAppModel {

  constructor() {
    this.articles = [];
  }

  addArticle(article) {
    this.articles.push(article)
  }

}

module.exports = newsAppModel;