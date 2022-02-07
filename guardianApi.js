// require('dotenv').config();


class GuardianApi {
  getHeadlines(searchTerm, callback) {
    fetch(`https://content.guardianapis.com/search?q=${searchTerm}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=471c3b91-05b6-4377-81e7-16d75aee68f7`)
    .then(response => response.json())
    .then(data => {
      callback(data)
    })
  }
}

module.exports = GuardianApi
