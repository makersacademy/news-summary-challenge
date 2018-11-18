/* eslint-disable import/extensions */
import NewsArticle from './NewsArticle.js';
import env from '../.env.js';

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
      view += `<p><a href="${article.url}" id="${article.id}">${article.headline}</a></p>`;
    });
    return view;
  }

  fetchFromGuardianAndUpdateArticles() {
    const url = `https://content.guardianapis.com/search?tag=technology/technology&api-key=${env.GUARDIAN_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        data.response.results.forEach((result) => {
          this.createArticle(result.webTitle, result.webUrl);
        });
      });
  }
}
