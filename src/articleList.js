class ArticleList {

  constructor() {
    this.articles = []
  }

  addArticle(headline, url, thumbnail) {
    this.articles.push(new Article(headline, url, thumbnail));
  }
  
  getArticles() {
    return this.articles;
  }
}