const apiKey = require("./apiKey");

class NewsApi {
  loadArticles(search, callbackOne, callbackTwo) {
    fetch(
      `https://content.guardianapis.com/search?q=${search}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`
    )
      .then((response) => response.json(response))
      .then((articles) => {
        callbackOne(articles);
      })
      .catch(callbackTwo);
  }
}

module.exports = NewsApi;
