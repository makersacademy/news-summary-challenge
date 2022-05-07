const apiKey = require('./apiKey');

class GuardianApi {
  loadHeadlines(callback, errorCallBack) {
    const url = `https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        callback(data);
      })
      .catch((error) => {
        console.log('error:', error);
        errorCallBack(error);
      })
  }
}

module.exports = GuardianApi;