const apiKey = require("./apiKey");

class newsClient {
  constructor() {
    this.apiKey = apiKey;
    this.apiUrl = "https://content.guardianapis.com/search";
  }

  fetchNews(callback) {
    return fetch(
      `${this.apiUrl}?order-by=newest&show-fields=thumbnail,headline,byline&api-key=${this.apiKey}`
    )
      .then((response) => response.json())
      .then((data) => callback(data.response.results))
      .catch((error) => console.error(`Error: ${error}`));
  }
}

module.exports = newsClient;
