class Article {

  constructor(headline, url, thumbnail) {
    this.headline = headline
    this.url = url
    this.thumbnail = thumbnail 
  }

  getHeadline() {
    return this.headline;
  }

  // for when the site deals with the content of articles 

  getUrl() {
    return this.url;
  }
}