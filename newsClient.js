const apiKey = require('./apiKey')

class NewsClient {

   loadNews (callback, callbackError) {
    fetch("https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=test")
    .then((response) => response.json())
    .then((data) => {
         callback(data);
  })
    
   }
    

}


  

  module.exports = NewsClient;