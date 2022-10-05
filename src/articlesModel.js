class ArticlesModel {
  constructor() {
    this.articles = [];
  }

  setArticles(data) {
    data.forEach((article) => {
      console.log(article);
      this.articles.push(article);
    });
    return this.articles;
  }
}

module.exports = ArticlesModel;
