const { apiKey, url } = require('./api')

class NewsClient {
  loadArticles(callback, errorHanlder) {
    fetch(`${url}${apiKey}`)
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => errorHanlder(error))
  }
}
module.exports = { NewsClient }