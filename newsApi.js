const apiKey = require('./apiKey')

class NewsApi {

    getNewsInfo(callback, apiKey = guardianApi) {
      fetch('https://content.guardianapis.com/search?api-key=${apiKey}&type=article&show-fields=thumbnail&show-fields=all')
        .then(response => response.json())
        .then(data => {
          console.log(data.response.results)
          callback(data.response.results)
          .catch((error) => console.log(error))
        });

        // search?api-key=04fa366b-cd7a-4a4f-98b4-15f1685362ce'
  
    }
  
    
    
  }












module.exports = NewsApi;