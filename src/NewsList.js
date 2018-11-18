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

  fetchSummariesFromAylienAndUpdateSentences() {
    this.articles.forEach((article) => {
      const urlRequest = `http://hnryjmes-cors-anywhere.herokuapp.com/https://api.aylien.com/api/v1/summarize?url=${article.url}`;
      const request = new Request(urlRequest, {
        headers: new Headers({
          'X-AYLIEN-TextAPI-Application-Key': env.AYLIEN_KEY,
          'X-AYLIEN-TextAPI-Application-ID': env.AYLIEN_ID,
        }),
      });
      fetch(request).then(response => response.json())
        .then((data) => {
          // eslint-disable-next-line no-param-reassign
          article.sentences = data.sentences;
        });
    });
  }
}
