class NewsModel {
  constructor() {
    this.headline = "";
    this.thumbnail = "";
    this.url = "";
  }

  getHeadline() {
    return this.headline;
  }

  setHeadline(headline) {
    this.headline = headline;
  }

  getThumbnail() {
    return this.thumbnail;
  }

  setThumbnail(thumbnail) {
    this.thumbnail = thumbnail;
  }

  getUrl() {
    return this.url;
  }

  setUrl(url) {
    this.url = url;
  }
}

module.exports = NewsModel;
