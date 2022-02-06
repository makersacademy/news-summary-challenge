const url = 'https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key='

class NewsApi {
  constructor(api_key) {
    this.api_key = api_key
  }

  loadArticles(callback) {
    fetch(url + this.api_key)
      .then(response => response.json())
      .then(data => {
        callback(data)
      })
  }
}

module.exports = NewsApi;
