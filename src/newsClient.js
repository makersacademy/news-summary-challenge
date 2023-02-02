const gApiKey = require("../guardianApiKey");

class NewsClient {
  loadNews(news, errorCallback) {
    return fetch(`https://content.guardianapis.com/search?api-key=${gApiKey}`)
      .then((response) => response.json())
      .then((data) => {
        news(data);
      })
      .catch((error) => {
        errorCallback(error);
      });
  }
}
module.exports = NewsClient;
