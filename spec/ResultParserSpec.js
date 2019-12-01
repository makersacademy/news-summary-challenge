const ResultParser = require("../src/ResultParser.js").ResultParser
const expect = require("../lib/tester.js").expect
const scenario = require("../lib/tester.js").scenario
const describe = require("../lib/tester.js").describe

var result = {
  "id": "football/live/2019/dec/01/norwich-city-v-arsenal-premier-league-live",
  "type": "liveblog",
  "sectionId": "football",
  "sectionName": "Football",
  "webPublicationDate": "2019-12-01T15:26:51Z",
  "webTitle": "Norwich City v Arsenal: Premier League – live!",
  "webUrl": "https://www.theguardian.com/football/live/2019/dec/01/norwich-city-v-arsenal-premier-league-live",
  "apiUrl": "https://content.guardianapis.com/football/live/2019/dec/01/norwich-city-v-arsenal-premier-league-live",
  "fields": {
  "thumbnail": "https://media.guim.co.uk/3032f432181dee886132a4047175944a17c73a7a/0_154_3500_2100/500.jpg"
  },
  "isHosted": false,
  "pillarId": "pillar/sport",
  "pillarName": "Sport"
}

var resultParser = new ResultParser(result)

describe("#getHeadlineApiUrl", function() {
  scenario("It returns the api url for an article", function() {
    expect(resultParser.getHeadlineApiUrl(result)).toEqual(result.apiUrl)
  })
})

describe("#getHeadlineWebUrl", function() {
  scenario("It returns the web url for an article", function(){
    expect(resultParser.getHeadlineWebUrl(result)).toEqual(result.webUrl)
  })
})

describe("#getThumbnailUrl", function() {
  scenario("It returns the thumbnail url for an article", function(){
    expect(resultParser.getThumbnailUrl(result)).toEqual(result.fields.thumbnail)
  })
})

describe("#getTitle", function() {
  scenario("It returns the title of a result", function() {
    expect(resultParser.getTitle(result)).toEqual(result.webTitle)
  })
})