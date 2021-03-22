class Article {
  constructor(articleResponse) {
    this.headline = articleResponse.headline
    this.body = articleResponse.body
    this.author = articleResponse.author
  }
}
