class Article {
  constructor(object) {
    Articles.add(this)
    this.object = object;
    this.id = Articles.all.length
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
