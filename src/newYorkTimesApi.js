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
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data.results))
      .catch((error) => reject(error));
  }
}

module.exports = NewYorkTimesApi;
