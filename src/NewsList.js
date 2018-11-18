/* eslint-disable import/extensions */
import NewsArticle from './NewsArticle.js';

export default class NewsList {
  constructor() {
    this.articles = [];
    this.idCount = 0;
  }

  create(headline, url) {
    this.articles.push(new NewsArticle(headline, url, this.idCount));
    this.idCount += 1;
  }
}
