class Article {
  constructor(article){
    this.api = article.response.content.apiUrl
    this.title = article.response.content.webtitle
    this.body = article.response.fields.body 
  }
}
