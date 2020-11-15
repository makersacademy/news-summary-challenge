class ArticleList {
  constructor() {
    this.articles = []
  }

  returnArticles(){
    return this.articles
  }

  returnHeadlines(){
    let articleHeadlines = []
    this.returnArticles().forEach(article => {
      articleHeadlines.push(article.returnTitle())
    })
    return articleHeadlines
  }

  addArticle(title, summary){
    let article = new Article(title, summary)
    this.articles.push(article)
  }
}