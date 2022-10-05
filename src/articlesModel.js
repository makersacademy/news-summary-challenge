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
    const filteredArticles = this.articles.filter((article) => {
      const titleAndAbstract = article.title + " " + article.abstract;
      return titleAndAbstract.toLowerCase().includes(searchInput.toLowerCase());
    });
    return filteredArticles;
  }
}

module.exports = ArticlesModel;
