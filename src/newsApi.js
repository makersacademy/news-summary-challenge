const apiKey = require("./apiKey");

class NewsApi {
  loadArticles(callback) {
    fetch(
      `https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`
    )
      .then((response) => response.json(response))
      .then((articles) => {
        callback(articles);
      });
  }
}

module.exports = NewsApi;
