const API_KEY = require("./key.js");
const mockData = require("./mockData");

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

document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector("#list");
});

const createListItem = (info) => {
  const { thumbnail, headline, webUrl } = info;
  return `<li class="list__item">
    <a class="" href="${webUrl}" ><img class="item__thumbnail" src=${thumbnail}></a>
    <p class="item__heading">${headline}</p>
  </li>`;
};
