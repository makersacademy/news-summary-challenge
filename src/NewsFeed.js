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

  getArticleFromUrl(url) {
    this.articles.filter(function(article) {
      return article.url === url;
    })
  }
}
