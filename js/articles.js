class Articles {
  constructor() {
    this.articlesArray = []
  }

  add(article) {
    this.articlesArray.push(article)
  }

  getArray() {
    return this.articlesArray
  }
}
