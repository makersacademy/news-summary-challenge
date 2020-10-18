class ArticleList {

  constructor() {
    this.articles = []
  }

  addArticle(headline, url) {
    this.articles.push(new Article(headline, url));
  }
  
  getArticles() {
    return this.articles;
  }
}