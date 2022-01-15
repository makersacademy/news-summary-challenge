class NewsApi {

  getArticles(callback, apiKey = API_KEY) {
    fetch(`https://content.guardianapis.com/search?api-key=${apiKey}`)
    .then((response) => response.json())
    .then((data) => callback(data.response.results))
    .catch((error) => console.log(error));
  }

}

module.exports = NewsApi;