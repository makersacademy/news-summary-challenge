class Article {

  constructor(headline, textBody, thumbnail, url) {
    this.headline = headline
    this.textBody = textBody
    this.thumbnail = thumbnail
    this.url = url
  }

  getHeadline() {
    return this.headline;
  }

  getTextBody() {
    return this.textBody;
  }

  getThumbnail() {
    return this.thumbnail;
  }

  getUrl() {
    return this.url;
  }
}
