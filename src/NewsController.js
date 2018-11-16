/* eslint-disable import/extensions */
/* eslint-disable no-console */
import env from '../.env.js';

export default class NewsController {
  constructor(name) {
    this.name = name;
  }

  render() {
    console.log(this);
    const url = `https://content.guardianapis.com/search?api-key=${env.API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        console.log(data.response.results[0]);
        const stories = data.response.results;
        stories.forEach((story) => {
          const para = document.createElement('p');
          para.innerHTML = `<a href="${story.webUrl}">${story.webTitle}</a>`;
          document.body.appendChild(para);
        });
      });
  }
}
