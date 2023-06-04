class NewsModel {
  #headline = null;
  #thumbnail = null;
  #url = null;

  getHeadline() {
    return this.#headline;
  }

  setHeadline(headline) {
    this.#headline = headline;
  }

  getThumbnail() {
    return this.#thumbnail;
  }

  setThumbnail(thumbnail) {
    this.#thumbnail = thumbnail;
  }

  getUrl() {
    return this.#url;
  }

  setUrl(url) {
    this.#url = url;
  }
}

module.exports = NewsModel;
