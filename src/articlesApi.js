const key = require("./apiKey");

class ArticlesApi {
  loadArticles(callbackOne, search = "", callbackTwo) {
    const urlSearch = search.replaceAll(" ", "+");
    fetch(
      `https://content.guardianapis.com/search?q=${urlSearch}&query-fields=headline&show-fields=thumbnail,bodyText&order-by=newest&api-key=${key()}`
    )
      .then((response) => response.json())
      .then((data) => {
        callbackOne(data);
      })
      .catch(callbackTwo);
  }
}

module.exports = ArticlesApi;
