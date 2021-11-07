let guardianAPI =
  "https://content.guardianapis.com/search?api-key=1390b3ba-60f0-499a-9806-0143dee54b8e";
let testAPI =
  "https://content.guardianapis.com/search?page=1&api-key=test&show-fields=body,headline,thumbnail";

const fetchNews = (onDataFetched) => {
  fetch(testAPI)
    .then((response) => response.json())
    .then(onDataFetched);
};

module.exports = fetchNews;
