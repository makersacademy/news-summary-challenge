class Article {
  constructor(title, urlId, thumbnail, id){
    this.title = title
    this.urlId = urlId
    this.id = id
    this.thumbnail = thumbnail
  }

  returnTitle(){
    return this.title
  }

  returnUrlId(){
    return this.urlId
  }

  returnThumbnail(){
    return this.thumbnail
  }
}