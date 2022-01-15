const {guardianApiKey} = require('./env.js')

class GuardianApi {
  loadArticles(callback) {
    fetch(`https://content.guardianapis.com/search?show-fields=headline%2Cbody&api-key=${guardianApiKey}`)
      .then(response => response.json())
      .then(data => {
        callback(data.response.results)
      })
  }
}

module.exports = GuardianApi;

// data.response.results is an array of objects:
// first one object example:
// 
// 0:
// apiUrl: "https://content.guardianapis.com/football/live/2022/jan/15/manchester-city-v-chelsea-premier-league-live"
// fields: {
//  body: html string
//  headline:  string
//}
// id: "football/live/2022/jan/15/manchester-city-v-chelsea-premier-league-live"
// isHosted: false
// pillarId: "pillar/sport"
// pillarName: "Sport"
// sectionId: "football"
// sectionName: "Football"
// type: "liveblog"
// webPublicationDate: "2022-01-15T12:03:45Z"
// webTitle: "Manchester City v Chelsea: Premier League – live!"
// webUrl: "https://www.theguardian.com/football/live/2022/jan/15/manchester-city-v-chelsea-premier-league-l