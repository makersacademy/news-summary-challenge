/* eslint-disable import/extensions */
/* eslint-disable no-console */
import env from '../.env.js';

export default class NewsArticle {
  constructor(headline, url, id) {
    this.headline = headline;
    this.url = url;
    this.id = id;
    this.sentences = [];
  }

  fetchSummary() {
    const urlToSummarize = this.url;
    const urlRequest = `http://hnryjmes-cors-anywhere.herokuapp.com/https://api.aylien.com/api/v1/summarize?url=${urlToSummarize}`;
    const request = new Request(urlRequest, {
      headers: new Headers({
        'X-AYLIEN-TextAPI-Application-Key': env.AYLIEN_KEY,
        'X-AYLIEN-TextAPI-Application-ID': env.AYLIEN_ID,
      }),
    });
    fetch(request).then(response => response.json())
      .then((data) => {
        this.sentences = data.sentences;
      });
  }
}
