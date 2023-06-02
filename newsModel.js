require("dotenv").config();

class NewsModel {
  loadArticles() {
    return fetch(
      `https://content.guardianapis.com/search?api-key=${process.env.API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.response);
      });
  }
}

module.exports = NewsModel;
