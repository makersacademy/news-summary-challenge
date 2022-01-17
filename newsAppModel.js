class newsAppModel {

  constructor() {
    this.articles = [];
  }

  addArticle(article) {
    this.articles.push(article)
  }

  getSummary(article) {
    let body = article.fields.body.split("<p>");
    let text = body.map((paragraph) => "<p>" + paragraph);
    return text.slice(1,3);
  }

  setArticles(articleArray) {
    for (const article of articleArray) {
      this.articles.push(article);
    }
  }

}

module.exports = newsAppModel;