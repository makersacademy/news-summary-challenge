const API_KEY = require('../apiKey.js');
const API_TOKEN = require('../apiToken.js');

class NewsClient {
  loadNews(callback, errorCallback) {
    fetch(
      `https://content.guardianapis.com/search?show-fields=thumbnail%2Cheadline%2Cbyline%2Cstandfirst,bodyText&page-size=40&section=world&api-key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((error) => {
        errorCallback(error);
      });
  }

  searchNews(searchTerm, callback, errorCallback) {
    fetch(
      `https://content.guardianapis.com/search?q=${searchTerm}&page-size=40&query-fields=headline&show-fields=thumbnail,headline,byline,standfirst,bodyText&order-by=newest&api-key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((error) => {
        errorCallback(error);
      });
  }

  filterNews(section, callback, errorCallback) {
    fetch(
      `https://content.guardianapis.com/search?section=${section}&page-size=40&show-fields=thumbnail,headline,byline,standfirst,bodyText&order-by=newest&api-key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((error) => {
        errorCallback(error);
      });
  }

  summariseText = async (data) => {
    const response = await fetch(
      'https://api-inference.huggingface.co/models/google/pegasus-newsroom',
      {
        headers: { Authorization: `Bearer ${API_TOKEN}` },
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  };
}
module.exports = NewsClient;
