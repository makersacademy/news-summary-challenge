const apiKey = require("./apiKey");
const apiUrl = `https://content.guardianapis.com/search?api-key=${apiKey}`;

class NewsClient {
  fetchNews(onSucces, onError) {
    const fetchPromise = fetch(apiUrl);

    fetchPromise
      .then((result) => result.json())
      .then((newsData) => onSucces(newsData));

    fetchPromise.catch((error) => onError(error));
  }
}

module.exports = NewsClient;
