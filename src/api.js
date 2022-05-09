const ApiKey = require('./ApiKey');

class Api {
  constructor() {
    //   GET URL this.url = 
  }


  getHeadlines(callback) {
    fetch(this.url)
      .then(response => response.json())
      .then(data => {
        console.log(data.response.results),
        callback(data.response.results) 
      })
      .catch((error) => console.log(error));
  }

  searchHeadlines(searchField, callback) {
      //   GET URL this.url = 
    this.getHeadlines(callback);
  }
};

module.exports = Api;
