class NewsApi {

  loadHeadlines(callback, apiKey) {
    fetch(`https://content.guardianapis.com/search?api-key=${apiKey}&type=article&show-fields=thumbnail&show-fields=all`)
      .then(response => response.json())
      .then(data => {
        console.log(data),
        callback(data.response.results)})
      .catch((error) => console.log(error))
  }
}

module.exports = NewsApi;
