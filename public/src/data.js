
class NewsData {

  constructor() {
    this.newsArray = []
  }

  getData() {
    // Getting data from API
    const url = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html"
    var dataAPI = fetch(url)
    .then(response => response.json())//response type
    .then(data => this.newsArray.push(data))
    // .then(data => console.log(data.text)); //log the data;
    return dataAPI
  }
  
}

// Article on how to fetch from API
// https://dev.to/bjhaid_93/beginners-guide-to-fetching-data-with-ajax-fetch-api--asyncawait-3m1l

// fetch("https://opensourcepyapi.herokuapp.com/news",{mode: 'no-cors'}).then(d => d.text()).then(d => console.log("Done", d)).catch(err => console.error("Error", err))