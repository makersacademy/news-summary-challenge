const moment = require('moment')
const apiKey = require('./apikey.js');
class NewsClient {

  constructor(){
    // Get the date in the format needed for the APIURL
    this.date = moment().format('YYYY-MM-DD');
    //
  }

  // Make a GET request for today's stories 
  fetchStories(){
    
  }

}

module.exports = NewsClient;