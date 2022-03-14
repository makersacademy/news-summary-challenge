const apiKey = require(`./apiKey`);

class NewsApi {
  getNews(searchTerm, callback) {
    fetch(`https://content.guardianapis.com/search?q=${searchTerm}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        callback(data.response.results);
      });
  };
}

module.exports = NewsApi;