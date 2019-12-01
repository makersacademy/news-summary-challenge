const Fetcher = require("../src/fetcher.js").Fetcher
const expect = require("../lib/tester.js").expect
const scenario = require("../lib/tester.js").scenario
const describe = require("../lib/tester.js").describe


describe(".Fetcher", function() {
  scenario("It returns the string for the Aylien Api", function() {
    var fetch = new Fetcher()
    expect(fetch.concatUrl("aylien", "sample_url")).toEqual("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=sample_url")
  })

  scenario("It returns the string for the Guardian Api", function() {
    var fetch = new Fetcher()
    expect(fetch.concatUrl("guardian", "sample_url2")).toEqual("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=sample_url2")
  })
})