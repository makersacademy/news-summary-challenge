class NewsFeed {

  constructor() {
    this.articles = [];
  }

  getArticles() {
    return this.articles;
  }

  addNewArticle(article) {
    this.articles.push(article);
  }

}
