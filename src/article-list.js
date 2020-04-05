class Articlelist {
  constructor() {
    this.list = [];
    this.count = 0;
  }

  addArticle(headline, url) {
    this.list.push(new Article(this.count, headline, url));
    this.count++;
  }
}
