const dotenv = require('dotenv')
dotenv.config()
class NewsApi {
  async loadNews() {
      const apiKey = process.env.API_KEY
    const url =
    `https://content.guardianapis.com/search?api-key=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.error(error);
    }
  }
}
module.exports = NewsApi;