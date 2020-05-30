class Article {
  constructor(article){
    this.api = article.response.content.apiUrl
    this.title = article.response.content.webTitle
    this.body = article.response.content.fields.body
  }
}
