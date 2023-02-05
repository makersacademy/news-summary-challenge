const apiKey = require("./apiKey");
const apiUrl = `https://content.guardianapis.com/search?api-key=${apiKey}`;

class NewsClient {
  fetchNews(onSuccess, onError) {
    const fetchPromise = fetch(apiUrl);

    fetchPromise
      .then((result) => result.json())
      .then((newsData) => onSuccess(newsData.response.results));

    fetchPromise.catch((error) => onError(error));
  }
}

module.exports = NewsClient;
