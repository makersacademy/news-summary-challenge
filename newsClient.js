const apiKey = require('./apiKey');

class NewsClient {
  constructor() {

  }

  loadArticles() {
    return fetch(`https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    }).catch((error) => {return error});
  }

  loadTopicArticles(topic) {
    return fetch(`https://content.guardianapis.com/search?q=${topic}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      return data
    }).catch((error) => {return error})
  }
}

module.exports = NewsClient;