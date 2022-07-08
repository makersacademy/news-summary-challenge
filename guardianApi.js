const guardianApiKey = require('./guardianApiKey')

class GuardianApi {
  loadNews() {
    fetch('https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=' + guardianApiKey)
      .then(response => response.json())
      .then(data => console.log(data.response.results[0]))
  }
}

module.exports = GuardianApi;