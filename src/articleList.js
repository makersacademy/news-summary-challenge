class ArticleList {
  constructor(articleClass = Article) {
    this.articleClass = articleClass;
    this.articles = [];
  }

  addArticle(headline, thumbnail, urlID) {
    let serialID = this.articles.length;
    this.articles.push(new this.articleClass(headline, thumbnail, urlID, serialID));
  }

  getAllArticles() {
    return this.articles;
  }

  getArticleByID(serialID) {
    return this.articles[serialID];
  }

  getHeadlines() {
    let headlines = [];
    this.articles.forEach(article => {
      headlines.push(article.getHeadline());
    });
    return headlines;
  }
}
