class ArticlesModel {
  constructor() {
    this.articles = [];
  }

  setArticles(data) {
    this.articles = data;
  }

  getArticles() {
    return this.articles;
  }

  getSearchArticles(searchInput) {
    const filteredArticles = this.articles.filter((article) =>
      article.title.includes(searchInput)
    );
    return filteredArticles;
  }
}

module.exports = ArticlesModel;
