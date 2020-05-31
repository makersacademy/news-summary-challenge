class Article {
  constructor(object) {
    this.object = object;
    Articles.add(this)
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

class Articles {
  static create() {
    this.all = []
  }

  static add(article) {
    this.all.push(article)
  }
}
