class Article {
  constructor(object) {
    this.object = object;
  }

  get title() {
    return this.object.webTitle;
  }

}
