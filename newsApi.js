class NewsApi {

  getArticles(callback, apiKey = API_KEY) {
    fetch(`https://content.guardianapis.com/search?api-key=${apiKey}&type=article&show-fields=thumbnail&show-fields=all`)
    .then((response) => response.json())
    .then((data) => callback(data.response.results))
    .catch((error) => console.log(error));
  }

}

module.exports = NewsApi;