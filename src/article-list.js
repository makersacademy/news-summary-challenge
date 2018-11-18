import { Article as Article } from "./article.js";

class ArticleList {
  constructor() {
    this.articles = [];
  }
  create(url, headline, imageURL) {
    var article = new Article(this, this._nextID(), url, headline, imageURL);
    this.articles.push(article);
    return article;
  }

  find(id) {
    return this.articles.find((article) => {
      return article.id === id;
    });
  }

  _nextID() {
    return this.articles.length+1;
  }
}

export { ArticleList };
