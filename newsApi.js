const API_KEY = require('./apikey')
class NewsApi {
  async loadNews(callback) {
    const url =
    `https://content.guardianapis.com/search?page=1&q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${API_KEY}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      
 
      callback(data)

    } catch (error) {
      console.error(error);
    }
  }
}
module.exports = NewsApi;