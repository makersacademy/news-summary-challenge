const ApiKey = require('./apiKey')

class NewsApi {
  constructor(){
    this.url = 'https://content.guardianapis.com/search?q=';
    this.apiKey = `${ApiKey}`;
  }

  fetchStories(newsCallback){
    const fullUrl = this.url + this.apiKey
    fetch(fullUrl)
      .then(response => response.json())
      .then((data) => {
        newsCallback(data);
      })
  }

  setUrl(keyWord){
    const fullUrl = this.url + keyWord + this.apiKey
    fullUrl
  }
}

module.exports = NewsApi;