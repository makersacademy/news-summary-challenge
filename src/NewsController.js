/* eslint-disable import/extensions */
/* eslint-disable no-console */
import getApiKey from '../.env.js';

export default class NewsController {
  render() {
    console.log(this);
    const API_KEY = getApiKey();
    const url = `https://content.guardianapis.com/search?api-key=${API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        const stories = data.response.results;
        stories.forEach((story) => {
          const para = document.createElement('p');
          para.innerHTML = `<a href="${story.webUrl}">${story.webTitle}</a>`;
          document.body.appendChild(para);
        });
      });
  }
}
