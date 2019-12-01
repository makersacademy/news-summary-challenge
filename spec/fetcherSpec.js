const Fetcher = require("../src/fetcher.js").Fetcher
const expect = require("../lib/tester.js").expect
const scenario = require("../lib/tester.js").scenario
const describe = require("../lib/tester.js").describe

var gaurdianResult = {
  "id": "uk-news/2019/dec/01/how-get-hitched-feminist-mixed-sex-civil-partnerships-begin-england-wales",
  "type": "article",
  "sectionId": "uk-news",
  "sectionName": "UK news",
  "webPublicationDate": "2019-12-01T14:58:33Z",
  "webTitle": "'This is how you get hitched as a feminist': mixed-sex civil unions to begin",
  "webUrl": "https://www.theguardian.com/uk-news/2019/dec/01/how-get-hitched-feminist-mixed-sex-civil-partnerships-begin-england-wales",
  "apiUrl": "https://content.guardianapis.com/uk-news/2019/dec/01/how-get-hitched-feminist-mixed-sex-civil-partnerships-begin-england-wales",
  "isHosted": false,
  "pillarId": "pillar/news",
  "pillarName": "News"
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