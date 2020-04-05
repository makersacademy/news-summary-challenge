class Articlelist {
  constructor() {
    this.list = [];
  }

  addArticle(headline, url) {
    this.list.push(new Article(headline, url));
  }
}
