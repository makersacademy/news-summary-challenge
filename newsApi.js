const apiKey = require('./apiKey')

class NewsApi {

  loadHeadlines(callback, apiKey = guardianApi) {
    fetch(`https://content.guardianapis.com/search?api-key=${apiKey}&type=article&show-fields=thumbnail&show-fields=all`)
      .then(response => response.json())
      .then(data => {
        console.log(data.response.results),
        callback(data.response.results)})
      .catch((error) => console.log(error))
  }
}

module.exports = NewsApi;
