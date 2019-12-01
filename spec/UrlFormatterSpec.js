const UrlFormatter = require("../src/UrlFormatter.js").UrlFormatter
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

var formatter = new UrlFormatter()

describe(".UrlFormatter", function() {
  scenario("It returns the string for the Aylien Api", function() {

    expect(formatter.concatUrl("aylien", "sample_url")).toEqual("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=sample_url")
  })

  scenario("It returns the string for the Guardian Api", function() {
    expect(formatter.concatUrl("guardian", "sample_url2")).toEqual("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=sample_url2")
  })
})

describe("#getAylienUrl", function() {
  scenario("It returns a url for the aylien api to summarize the google front page", function() {
    expect(formatter.getAylienUrl("google.com")).toEqual("https://api.aylien.com/api/v1/summarize?url=/google.com")
  })

  scenario("It returns a url for the aylien api to summarize the wikipedia front page", function() {
    expect(formatter.getAylienUrl("wikipedia.com")).toEqual("https://api.aylien.com/api/v1/summarize?url=/wikipedia.com")
  })
})

describe("#getHeadlineApiUrl", function() {
  scenario("It returns the api url for an article", function() {
    expect(formatter.getHeadlineApiUrl(gaurdianResult)).toEqual(gaurdianResult.apiUrl)
  })
})

describe("#getHeadlineWebUrl", function() {
  scenario("It returns the web url for an article", function(){
    expect(formatter.getHeadlineWebUrl(gaurdianResult)).toEqual(gaurdianResult.webUrl)
  })
})

describe("#getThumbnailUrl", function() {
  scenario("It returns the thumbnail url for an article", function(){
    expect(formatter.getThumbnailUrl(gaurdianResult)).toEqual(gaurdianResult.fields.thumbnail)
  })
})

describe("#formatGuardianBaseUrl", function(){
  scenario("It returns a string with `hello` when passed `hello` as the api key", function(){
    expect(formatter.formatGuardianBaseUrl("hello")).toEqual("http://content.guardianapis.com/search?api-key=hello&show-fields=thumbnail")
  })

  scenario("It returns a string with `a_key` when passed `a_key` as the api key", function(){
    expect(formatter.formatGuardianBaseUrl("a_key")).toEqual("http://content.guardianapis.com/search?api-key=a_key&show-fields=thumbnail")
  })
})

describe("#getTitle", function() {
  scenario("It returns the title of a result", function() {
    expect(formatter.getTitle(gaurdianResult)).toEqual(gaurdianResult.webTitle)
  })
})