const API_KEY = require('./key.js');
const mockData = require('./mockData');

// fetch(
//   `https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${API_KEY}`
// )
//   .then((response) => response.json())
//   .then((data) => {
//     const results = data.response.results;
//     const info = results.map((article) => {
//       const { webUrl } = article;
//       const { headline, thumbnail } = article.fields;
//       return { thumbnail, headline, webUrl };
//     });
//     console.log(info);
//   });

document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('#list');
  mockData.forEach((item) => {
    list.append(createListItem(item));
  });
});

const createListItem = (info) => {
  const { thumbnail, headline, webUrl } = info;
  const li = document.createElement('LI');
  const html = `<a class="item__link" href="${webUrl}" ><img class="item__thumbnail" src=${thumbnail}></a><p class="item__heading">${headline}</p>`;
  li.className = 'list__item';
  li.innerHTML = html;
  return li;
};
