class Article {
  constructor(title, urlId, id){
    this.title = title
    this.urlId = urlId
    this.id = id
  }

  returnTitle(){
    return this.title
  }

  returnUrlId(){
    return this.urlId
  }
}