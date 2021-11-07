let testAPI =
  "https://content.guardianapis.com/search?page=1&api-key=test&show-fields=body,headline,thumbnail";

const fetchNews = (onDataFetched) => {
  fetch(guardianAPI)
    .then((response) => response.json())
    .then(onDataFetched);
};

module.exports = fetchNews;
