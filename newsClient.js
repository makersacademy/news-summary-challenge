const moment = require('moment')
const apiKey = require('./apikey.js');

class NewsClient {

  constructor(){
    // Get the date in the format needed for the APIURL
    this.date = moment().format('YYYY-MM-DD');
    
    //
  }

  // Make a GET request for today's stories 
  fetchStories(callback){

    // Form APIURL
    const apiUrl = `https://content.guardianapis.com/search?from-date=${this.date}&api-key=${apiKey}`
    
    // Make a get request to the Guardian API Endpoint
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      });
  
  }

}

module.exports = NewsClient;