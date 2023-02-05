const apiKey = require("./apiKey");
const apiUrl = `https://content.guardianapis.com/search?q=America&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`;

class NewsClient {
  fetchNews(onSuccess, onError) {
    const fetchPromise = fetch(apiUrl);

    const onSuccessPromise = fetchPromise
      .then((result) => result.json())
      .then((newsData) => onSuccess(newsData.response.results));

    fetchPromise.catch((error) => onError(error));

    return onSuccessPromise;
  }
}

module.exports = NewsClient;
