const GuardianApiKey = require('./guardianApiKey');

const guardianKey = new GuardianApiKey;

class GuardianApi {
  constructor() {
    this.url = `https://content.guardianapis.com/search?q=latest&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${guardianKey.key}`;
  }

  getHeadlines(callback) {
    fetch(this.url)
      .then(response => response.json())
      .then(data => {
        console.log(data.response.results),
        callback(data.response.results) 
      })
      .catch((error) => console.log(error));
  }

  searchHeadlines(searchField, callback) {
    this.url = `https://content.guardianapis.com/search?q=${searchField}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${guardianKey.key}`;
    this.getHeadlines(callback);
  }
}

module.exports = GuardianApi;
