class ArticleManager{
  constructor(){
    this.articles = [];
  }

  getArticles(){
    return this.articles;
  }

  addArticle(article = Article, url, apiUrl, thumbnail, content, title, date){
    var article = new article(url, apiUrl, thumbnail, content, title, date)
    this.articles.push(article)
    return article
  }

  addArticles(data){
    data.response.results.forEach((result) => {
      this.addArticle(Article,
                      result.webUrl,
                      result.fields.thumbnail,
                      result.webTitle,
                      result.webPublicationDate)
    })
  }
}
