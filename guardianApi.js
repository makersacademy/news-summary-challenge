require('dotenv').config();

class GuardianApi {
  getHeadlines(locationName, callback) {
    fetch(`https://content.guardianapis.com/search?q=${locationName}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=` + process.env.GUARDIAN_KEY)
    .then(response => response.json())
    .then(data => {
      callback(data)
    })
  }
}

module.exports = GuardianApi
