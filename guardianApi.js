const GuardianApiKey = require('./guardianApiKey');

const guardianKey = new GuardianApiKey;

class GuardianApi {
  getHeadlines(searchField = '', callback) {
    fetch(`https://content.guardianapis.com/search?q=${searchField}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${guardianKey.key}`)
      .then(response => response.json())
      .then(data => {
        callback(data.response.results)
      })
     .catch((error) => console.log(error));
  }
}

module.exports = GuardianApi;