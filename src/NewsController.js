/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import env from '../.env.js';

export default class NewsController {
  constructor(name) {
    this.name = name;
    this.results = [];
    this.sentences = [];
  }

  render() {
    this.fetchFromGuardianAndUpdateResults();
    setTimeout(() => {
      this.updatePageWithResults();
      this.makePlusButtonsWork();
    }, 2000);
  }

  updatePageWithResults() {
    this.results.forEach((story, index) => {
      const para = document.createElement('p');
      para.innerHTML = `<a href="${story.webUrl}">${story.webTitle}</a>&nbsp;<button id="${index}">[+]</button>`;
      document.getElementById('headlines').appendChild(para);
    });
  }

  updatePageWithSummary() {
    document.getElementById('summary').innerHTML = '';
    const span = document.createElement('span');
    span.innerHTML = this.sentences.join(' ');
    document.getElementById('summary').appendChild(span);
  }

  fetchFromGuardianAndUpdateResults() {
    const url = `https://content.guardianapis.com/search?api-key=${env.GUARDIAN_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.results = data.response.results;
      });
  }

  makePlusButtonsWork() {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 10; i++) {
      document.getElementById(i).addEventListener('click', (event) => {
        event.preventDefault();
        this.fetchFromAylienAndUpdateSentences(this.results[i].webUrl);
        setTimeout(() => {
          this.updatePageWithSummary();
        }, 2000);
      });
    }
  }

  fetchFromAylienAndUpdateSentences(urlToSummarize) {
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
