class ArticleList {
  constructor() {
    this.articles = []
  }

  returnArticles(){
    return this.articles
  }

  // returnHeadlines(){
  //   return this.articles
  // }

  addArticle(title, summary){
    let article = new Article(title, summary)
    this.articles.push(article)
  }
}