const apiKey = require('./apiKey')

class NewsClient {

   loadNews (callback) {
    fetch("https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=test")
    .then((response) => response.json())
    .then((data) => {
         callback(data);
    })}


  searchQueryResults(keyWord, callback) {

    const url = `https://content.guardianapis.com/search?q=${keyWord}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`

    fetch(url)
    .then(response => response.json())
      .then(data => {
        callback(data)
      })
  }
    

}


  

  module.exports = NewsClient;