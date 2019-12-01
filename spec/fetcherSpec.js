const Fetcher = require("../src/fetcher.js").Fetcher
const expect = require("../lib/tester.js").expect
const scenario = require("../lib/tester.js").scenario
const describe = require("../lib/tester.js").describe

var gaurdianResult = {
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

var fetch = new Fetcher()

describe(".Fetcher", function() {
  scenario("It returns the string for the Aylien Api", function() {

    expect(fetch.concatUrl("aylien", "sample_url")).toEqual("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=sample_url")
  })

  scenario("It returns the string for the Guardian Api", function() {
    expect(fetch.concatUrl("guardian", "sample_url2")).toEqual("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=sample_url2")
  })
})

describe("#getAylienUrl", function() {
  scenario("It returns a url for the aylien api to summarize the google front page", function() {
    expect(fetch.getAylienUrl("google.com")).toEqual("https://api.aylien.com/api/v1/summarize?url=/google.com")
  })

  scenario("It returns a url for the aylien api to summarize the wikipedia front page", function() {
    expect(fetch.getAylienUrl("wikipedia.com")).toEqual("https://api.aylien.com/api/v1/summarize?url=/wikipedia.com")
  })
})

describe("#getHeadlineApiUrl", function() {
  scenario("It returns the api url for an article", function() {
    expect(fetch.getHeadlineApiUrl(gaurdianResult)).toEqual(gaurdianResult.apiUrl)
  })
})

describe("#getHeadlineWebUrl", function() {
  scenario("It returns the web url for an article", function(){
    expect(fetch.getHeadlineWebUrl(gaurdianResult)).toEqual(gaurdianResult.webUrl)
  })
})

describe("#getThumbnailUrl", function() {
  scenario("It returns the thumbnail url for an article", function(){
    expect(fetch.getThumbnailUrl(gaurdianResult)).toEqual(gaurdianResult.fields.thumbnail)
  })
})