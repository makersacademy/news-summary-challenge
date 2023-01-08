class ArticleModel {
  constructor() {
    this.articles = [];
  }

  getArticles() {
    return this.articles;
  }

  setArticles(articles) {
    if (!Array.isArray(articles)) {
      throw new Error('Input to ArticleModel.setArticles must be an array.');
    } else if (!articles.every(this.#isValidArticle)) {
      throw new Error('Input to ArticleModel.setArticles must be an array of article objects');
    }

    this.articles = articles;
  }

  #isValidArticle(article) {
    return 'headline' in article &&
      'thumbnail' in article &&
      'webUrl' in article;
  }
}

module.exports = ArticleModel;
