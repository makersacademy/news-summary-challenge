/* eslint-disable no-console */
export default class NewsController {
  render() {
    console.log(this);
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
