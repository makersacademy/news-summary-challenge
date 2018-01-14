class ArticleManager{
  constructor(){
    this.articles = [];
  }

  getArticles(){
    return this.articles;
  }

  addArticle(article = Article, url, apiUrl, thumbnail, title, date, id, content){
    var article = new article(url, apiUrl, thumbnail, title, date, id, content)
    this.articles.push(article)
    return article
  }

  addArticles(data){
    data.response.results.forEach((result, index) => {
      this.addArticle(Article,
                      result.webUrl,
                      result.apiUrl,
                      result.fields.thumbnail,
                      result.webTitle,
                      result.webPublicationDate,
                      index)
    })
  }
}
