class Article {
  constructor(object) {
    this.object = object;
  }

  get webTitle() {
    return this.object.webTitle;
  }

  get thumbnail() {
    return this.object.fields.thumbnail
  }

  get bodyText() {
    return this.object.fields.bodyText
  }

}
