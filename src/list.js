"strict mode";

class List {
  constructor() {
    this._articles = [];
  }
  addArticle(headline, content, author, date, thumbnail) {
    var id = this._articles.length;
    this._articles.push(
      new Article(id, headline, content, author, date, thumbnail)
    );
  }
  viewArticles() {
    return this._articles;
  }
  findArticleById(id) {
    return this._articles[id];
  }
}
