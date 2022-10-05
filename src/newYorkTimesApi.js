const API_KEY = require("../apiKey");

class NewYorkTimesApi {
  constructor() {
    this.url = "https://api.nytimes.com/svc/topstories/v2/";
    this.apiKey = `?api-key=${API_KEY}`;
  }

  async getArticles() {
    const articles = await this.getArticlesHome();
    return articles;
  }

  async getArticlesHome() {
    const path = "home.json";
    const url = this.url + path + this.apiKey;
    const articles = await fetch(url).then((res) => res.json());
    return articles.results;
  }
}

module.exports = NewYorkTimesApi;
