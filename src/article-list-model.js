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
    let id = this.returnArticles().length
    let article = new Article(title, summary, id)
    this.articles.push(article)
  }

  getArticle(id){
    return this.articles[id]
  }
}