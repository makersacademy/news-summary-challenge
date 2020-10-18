class ArticleList {
  
  constructor() {
    this.articles = []
  }

  addArticle(article){
    this.articles.push(article)
  }

  createArticle(webTitle, webUrl, sectionId) {
    var article = new Article(webTitle, webUrl, sectionId)
    this.addArticle(article)
  }

}
