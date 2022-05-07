require('dotenv').config();

class ArticlesApi {
  loadArticles(callback) {
    fetch(`https://content.guardianapis.com/search?api-key=${process.env.API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      })
  }
}

module.exports = ArticlesApi;