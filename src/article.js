class Article {
  constructor(headline, thumbnail, urlID, serialID) {
    this.headline = headline;
    this.thumbnail = thumbnail;
    this.urlID = urlID;
    this.serialID = serialID;
  }

  getHeadline() {
    return this.headline;
  }

  getThumbnail() {
    return this.thumbnail;
  }

  getUrlID() {
    return this.urlID;
  }

  getSerialID() {
    return this.serialID;
  }
}
