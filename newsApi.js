const ApiKey = require('./apiKey')

class NewsApi {
  constructor(){
    this.url = 'https://content.guardianapis.com/search?q=';
    this.apiKey = `${ApiKey}`;
  }

  getNews(newsCallback){
    const fullUrl = this.url + this.apiKey
    fetch(fullUrl)
      .then(response => response.json())
      .then((data) => {
        newsCallback(data);
      })
  }
}

module.exports = NewsApi;