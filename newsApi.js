const apiKey = require('./apiKey');

class newsApi {

  fetchNews(query, callback, errorCallback) {
    fetch(`https://content.guardianapis.com/search?q=${query}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`)
    .then(response => response.json())
    .then((data) => {
      console.log('Load', data);
      callback(data.response.results);
    })
    .catch(() => {
      console.error('Error');
      errorCallback();
    })
  }
}

module.exports = newsApi;
