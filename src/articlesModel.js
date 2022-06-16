class ArticlesModel {
  constructor() {
    this.articles = [];
  }

  getArticles() {
    return this.articles;
  }

  addArticle(article) {
    this.articles.push(article);
  }

  convertData(data) {
    const title = data.webTitle;
    const pic = data.fields.thumbnail;
    const address = data.webUrl;
    const summary = data.fields.bodyText;
    const article = {
      headline: title,
      image: pic,
      url: address,
      summary: summary
    };
    return article;
  }

  reset() {
    this.articles = [];
  }
}

module.exports = ArticlesModel;