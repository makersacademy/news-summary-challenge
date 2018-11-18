/* eslint-disable import/extensions */
import NewsArticle from './NewsArticle.js';

export default class NewsList {
  constructor() {
    this.articles = [];
    this.idCount = 0;
  }

  createArticle(headline, url) {
    this.articles.push(new NewsArticle(headline, url, this.idCount));
    this.idCount += 1;
  }

  getView() {
    let view = '';
    this.articles.forEach((article) => {
      view += `<p><a href='${article.url}' id='${article.id}'>${article.headline}</a></p>`;
    });
    return view;
  }
}
