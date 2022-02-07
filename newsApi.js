const API_KEY = require('./apiKey.js');
class NewsApi{
  loadArticles(callback){
    fetch(`https://content.guardianapis.com/search?page=1&q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      callback(data.response.results)})  
    .catch(error => console.log(error));
  }
}
module.exports = NewsApi;
