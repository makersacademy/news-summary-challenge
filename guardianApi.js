const {guardianApiKey} = require('./env.js')

class GuardianApi {
  loadArticles(callback, query = '') {
    fetch(`https://content.guardianapis.com/search?show-fields=headline%2Cthumbnail%2CtrailText${query}&api-key=${guardianApiKey}`)
      .then(response => response.json())
      .then(data => {
        callback(data.response.results)
      })
  }
}

module.exports = GuardianApi;
