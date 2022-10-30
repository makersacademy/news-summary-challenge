const guardianApiKey = require('./guardianApiKey')

class GuardianApi {
  loadNews(queryKeyWord, page, callbackFunction) {
    console.log('API fetching')
    let fullUrl = [
      'https://content.guardianapis.com/search?q=' + queryKeyWord,
      'page=' + page,
      'query-fields=headline',
      'show-fields=thumbnail,headline,byline',
      'order-by=newest',
      'api-key=' + guardianApiKey
    ].join('&');
    console.log(fullUrl)
    fetch(fullUrl)
      .then(response => response.json())
      .then(data => callbackFunction(data)) // console.log(data.response.results[0]) callbackFunction(data)
  }
}

module.exports = GuardianApi;