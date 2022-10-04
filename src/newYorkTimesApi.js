const API_KEY = require("../apiKey");

class NewYorkTimesApi {
  constructor() {
    this.url = "https://api.nytimes.com/svc/topstories/v2/";
    this.apiKey = `?api-key=${API_KEY}`;
  }

  getArticles(resolve, reject) {
    this.getArticlesHome(resolve, reject);
  }

  getArticlesHome(resolve, reject) {
    const path = "home.json";
    const url = this.url + path + this.apiKey;
    fetch("url")
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  }
}

module.exports = NewYorkTimesApi;
