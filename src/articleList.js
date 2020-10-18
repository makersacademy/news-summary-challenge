class ArticleList {

  constructor() {
    this.articles = []
  }

  addArticle(article) {
    this.articles.push(new Article(article));
  }
  
  getArticles() {
    return this.articles;
  }
}