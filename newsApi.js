const apiKey = require('./apiKey');

class newsApi {

  fetchNews(callback) {
    fetch(`https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`)
    .then(response => response.json())
    .then((data) => {
      console.log('Load', data);
      callback(data);
    })
    .catch(() => {
      console.error('Error');
      callback();
    })
  }
}

module.exports = newsApi;
