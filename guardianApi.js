const guardianApiKey = require('./guardianApiKey')

class GuardianApi {
  loadNews(callbackFunction) {
    console.log('API fetching')
    fetch('https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=' + guardianApiKey)
      .then(response => response.json())
      .then(data => callbackFunction(data)) // console.log(data.response.results[0])
  }
}

module.exports = GuardianApi;