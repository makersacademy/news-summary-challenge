const apiKey = require('./.apiKey')

class NewsApi {
  loadSummaries(callback) {
    fetch(`https://content.guardianapis.com/search?api-key=${apiKey}&show-fields=thumbnail`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      callback(data)
    })
    .catch((error) => {
      console.log(error)
      errorCb(error)
    })
  }
}
module.exports = NewsApi;