const apiKey = require('./env.js');

class NewsApi {
  constructor() {
    this.search = ""
    this.url = `https://content.guardianapis.com/search?order-by=newest&show-fields=thumbnail&q=${this.search}&api-key=4753bc48-feb6-4bb3-9bd6-b35bff1f3c40`
  }''

  loadStory(callback) {
    fetch(this.url)
      .then(results => results.json())
      .then(data => callback(data))
      .catch(function() {
        console.log("Cannot load data");
    });
  };

  searchStory(search, callback) {
    this.url = `https://content.guardianapis.com/search?order-by=newest&show-fields=thumbnail&q=${search}&api-key=4753bc48-feb6-4bb3-9bd6-b35bff1f3c40`
    this.loadStory(callback);
  };
};

module.exports = NewsApi; 

