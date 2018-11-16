/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import env from '../.env.js';

export default class NewsController {
  constructor(name) {
    this.name = name;
    this.results = [];
  }

  render() {
    this.makeButtonWork();
    this.fetchAndUpdateResults();
    setTimeout(() => {
      this.updatePageWithResults();
    }, 2000);
  }

  updatePageWithResults() {
    this.results.forEach((story) => {
      const para = document.createElement('p');
      para.innerHTML = `<a href="${story.webUrl}">${story.webTitle}</a>`;
      document.getElementById('headlines').appendChild(para);
    });
  }

  fetchAndUpdateResults() {
    const url = `https://content.guardianapis.com/search?api-key=${env.API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.results = data.response.results;
      });
  }

  makeButtonWork() {
    document.getElementById('summaryButton').addEventListener('click', this.fetchFromAylien);
  }

  fetchFromAylien() {
    const url = 'https://api.aylien.com/api/v1/summarize?url=https://www.theguardian.com/artanddesign/2018/nov/15/david-hockney-painting-record-auction-living-artist';
    const request = new Request(url, {
      headers: new Headers({
        'X-AYLIEN-TextAPI-Application-Key': '459a45149ca7c4a0b22f50e4a9b13a6e',
        'X-AYLIEN-TextAPI-Application-ID': '2d7caed4',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }),
    });
    fetch(request).then(response => response.json())
      .then((data) => {
        console.log(data);
      });
  }
}
