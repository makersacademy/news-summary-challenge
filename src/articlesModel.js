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

    const article = {
      headline: title,
      picture: pic,
      url: address
    };
    return article
  }
}

module.exports = ArticlesModel;