const apiKey = require("./apiKey");

class NewsClient {
  loadHeadlines(callback, errorCallback) {
    const apiUrl = `https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((responseData) => {
        callback(responseData);
      })
      .catch((error) => {
        errorCallback(error);
      });
  }
}

module.exports = NewsClient;
