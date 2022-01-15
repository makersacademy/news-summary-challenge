class newsAppModel {

  constructor() {
    this.articles = [];
  }

  addArticle(article) {
    this.articles.push(article)
  }

  setArticles(articleArray) {
    for (const article of articleArray) {
      this.articles.push(article);
    }
  }

}

module.exports = newsAppModel;