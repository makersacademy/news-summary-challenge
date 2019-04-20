class ArticleList {
  constructor() {
    this.list = [];
  }

  addArticle(article) {
    this.list.push(article);
  }

  getArticle(id) {
    let result = this.list.filter(article => article.getId() == id);
    return result[0];
  }

  getArticles() {
    return this.list;
  }
}

module.exports = ArticleList;
