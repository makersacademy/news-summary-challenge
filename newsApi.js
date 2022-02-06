const ApiKey = require('./apiKey')

class NewsApi {

    getNewsInfo(callback) {
      fetch('https://content.guardianapis.com/search?api-key=${apiKey}&type=article&show-fields=thumbnail&show-fields=all')
        .then(response => response.json())
        .then(data => {
          console.log(data.response.results)
          callback(data.response.results)
          .catch((error) => console.log(error))
        });

        // search?api-key=04fa366b-cd7a-4a4f-98b4-15f1685362ce'
  
    }

    searchHeadlines(searchTerm = '', callback) {
      fetch(`https://content.guardianapis.com/search?q=${searchTerm}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          console.log(data.response.results),
          callback(data.response.results)})
        .catch((error) => console.log(error))
   }
    
  
    
    
  }

module.exports = NewsApi;