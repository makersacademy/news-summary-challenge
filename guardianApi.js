class GuardianApi {
  getHeadlines(searchField, callback) {
    fetch(`https://content.guardianapis.com/search?q=${searchField}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=test`)
      .then(response => response.json())
      .then(data => {
        callback(data)
      });
  }
}

module.exports = GuardianApi;