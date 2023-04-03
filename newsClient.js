const { apiKey, url, searchUrl } = require('./api')

class NewsClient {
  loadArticles(callback, errorHanlder) {
    fetch(`${url}${apiKey}`)
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => errorHanlder(error))
  }

  searchArticles(keyword, callback) {
    fetch(`${searchUrl}${keyword}&api-key=${apiKey}`)
      .then(response => response.json())
      .then(data => callback(data))
  }
}
module.exports = { NewsClient }