// const apiKey = require("./apiKey");
// const summaryKey = require("./summaryKey");

class newsClient {
  constructor() {
    this.apiKey = process.env.guardianApi;
    this.summaryKey = process.env.smmryApi;
    this.apiUrl = "https://content.guardianapis.com/search";
  }

  fetchNews(callback) {
    return fetch(
      `${this.apiUrl}?order-by=newest&show-fields=thumbnail,headline,byline&page-size=30&api-key=${this.apiKey}`
    )
      .then((response) => response.json())
      .then((data) => callback(data.response.results))
      .catch((error) => console.error(`Error: ${error}`));
  }

  fetchSummary(url, callback) {
    return fetch(
      `http://api.smmry.com?SM_API_KEY=${summaryKey}&SM_URL=${encodeURIComponent(
        url
      )}`
    )
      .then((response) => response.json())
      .then((data) => callback(data.sm_api_content))
      .catch((error) => console.error(`Error: ${error}`));
  }

  searchNews(searchQuery, callback) {
    const url = `${
      this.apiUrl
    }?order-by=newest&show-fields=thumbnail,headline,byline&q=${encodeURIComponent(
      searchQuery
    )}&api-key=${this.apiKey}`;

    return fetch(url)
      .then((response) => response.json())
      .then((data) => callback(data.response.results))
      .catch((error) => console.error(`Error: ${error}`));
  }
}

module.exports = newsClient;
