/* eslint-disable import/extensions */
/* eslint-disable no-console */

export default class NewsList {
  constructor() {
    this.articles = [];
  }

  add(newsArticle) {
    this.articles.push(newsArticle);
  }
}
