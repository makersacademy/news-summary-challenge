const moment = require('moment')
const apiKey = require('./apiKey.js');

class NewsClient {

  constructor(){
    // Get the date in the format needed for the APIURL
    this.date = moment().format('YYYY-MM-DD');
    this.searchTerm = ''
    
  }
   
  
  setSearchTerm(searchTerm) {
    this.searchTerm = searchTerm;
  }

  // This methods Make a GET request for today's stories 
  fetchStories( callback){

    // // set APIURL
    const apiUrl = `https://content.guardianapis.com/search?from-date=${this.date}&show-fields=headline%2Cthumbnail%2Cstandfirst&api-key=${apiKey}`
    // Make a get request to the Guardian API Endpoint
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      });
      
  }

  // This method make a GET request using the searchterm constant in the URL 
  searchStories(callback){

    // // set APIURL
    const apiUrl = `https://content.guardianapis.com/search?order-by=newest&show-fields=headline%2Cthumbnail%2Cstandfirst&q=${this.searchTerm}&api-key=${apiKey}`
    // Make a get request to the Guardian API Endpoint
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      });
      
  }

}

module.exports = NewsClient;