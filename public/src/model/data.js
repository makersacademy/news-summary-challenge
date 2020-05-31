'use strict';

class NewsData {

  constructor() {
    this._storedNewsData = []
  }
  // Custom API 
  // getDataFromAPI() {
  //   // const apiKey = 'f463419c4e4c4ebd96549c95688e979b'
  //   // const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey='
  //   var dataFromAPI = null;
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //  .then(resp => resp.json())
  //  .then(resp => this._storedNewsData.push(resp))
  //  .then(obj => dataFromAPI = obj)
  //  return dataFromAPI
  // }

  viewAllNews() {
    return this._storedNewsData
  }

  // Makers API

  getDataFromAPI() {
    // Getting data from API
    const url = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html'
    var dataAPI = fetch(url)
    .then(response => response.json())//response type
    .then(data => this._storedNewsData.push(data))
    // .then(data => console.log(data.text)); //log the data;
    return dataAPI
  }
  
}

// Article on how to fetch from API
// https://dev.to/bjhaid_93/beginners-guide-to-fetching-data-with-ajax-fetch-api--asyncawait-3m1l

// JSONPlaceholder Fake Online REST API for Testing and Prototyping
// https://jsonplaceholder.typicode.com/