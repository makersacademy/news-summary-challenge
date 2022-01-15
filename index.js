const API_KEY = require('./env.js')

fetch(`https://content.guardianapis.com/search?api-key=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    console.log(data.response.results)
  })

// data.response.results is an array like of objects:
// object 0:
// apiUrl: "https://content.guardianapis.com/football/live/2022/jan/15/manchester-city-v-chelsea-premier-league-live"
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
  