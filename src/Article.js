class Article {

  constructor(headline, textBody, id, url) {
    this.headline = headline
    this.textBody = textBody
    this.id = id
    this.url = url
  }

  getHeadline() {
    return this.headline;
  }

  getTextBody() {
    return this.textBody;
  }

  getId() {
    return this.id;
  }

  getUrl() {
    return this.url;
  }
}
