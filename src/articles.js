class Api {
  constructor(){
    this.apis = []
  }

  add(json){
    for(const element of json){
      this.apis.push("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=" + element.apiUrl)
    }
  }
}

class Article {
  constructor(article){
    this.api = article.response.content.apiUrl
    this.title = article.response.content.webTitle
    this.body = article.response.content.fields.body
    Articles.add(article)
  }
}

class Articles {
  static instance(){
    this.all = []
  }

  static add(article){
    this.all.push(article)
  }
}
